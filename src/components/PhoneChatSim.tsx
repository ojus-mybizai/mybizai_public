"use client";

import { useEffect, useRef, useState } from "react";
import type { ChatScript, ChatStep } from "@/lib/chat";
import { Icon } from "@/components/icons";

/**
 * The signature visual: a phone frame playing a scripted conversation
 * with realistic timing — typing indicators, message pops and floating
 * outcome chips (PRD §4.5/§4.6). Loops with a 6s pause; starts when
 * scrolled into view; renders fully static under prefers-reduced-motion.
 */
export default function PhoneChatSim({
  script,
  className = "",
}: {
  script: ChatScript;
  className?: string;
}) {
  const total = script.steps.length;
  const [count, setCount] = useState(0); // steps currently visible
  const [typing, setTyping] = useState(false);
  const [started, setStarted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const reduced = useRef(false);

  // Start when in view (once)
  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) {
      setCount(total);
      return;
    }
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [total]);

  // Sequencer
  useEffect(() => {
    if (!started || reduced.current) return;
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) =>
      new Promise<void>((res) => {
        const t = setTimeout(res, ms);
        timers.push(t);
      });

    const delayFor = (step: ChatStep): number => {
      if (step.kind === "system") return 600;
      if (step.kind === "chip") return 900;
      return step.from === "in" ? 1300 : 700;
    };

    (async () => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        setCount(0);
        setTyping(false);
        await wait(700);
        for (let i = 0; i < total; i++) {
          if (cancelled) return;
          const step = script.steps[i];
          await wait(delayFor(step));
          if (cancelled) return;
          if (step.kind === "msg" && step.typing) {
            setTyping(true);
            await wait(Math.min(2200, 700 + step.text.length * 12));
            if (cancelled) return;
            setTyping(false);
          }
          setCount(i + 1);
        }
        await wait(6000); // loop pause (PRD §4.5)
        if (cancelled) return;
      }
    })();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [started, script, total]);

  const visible = script.steps.slice(0, count);
  const chips = visible.filter((s) => s.kind === "chip");
  const messages = visible.filter((s) => s.kind !== "chip");

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      {/* Screen-reader equivalent (PRD §7.5) */}
      <p className="sr-only">{script.alt}</p>

      <div aria-hidden="true">
        <div className="phone-frame mx-auto">
          <div className="phone-screen">
            <div className="phone-statusbar">
              <div className="phone-avatar">{script.title.charAt(0)}</div>
              <div className="min-w-0">
                <div className="text-[14px] font-semibold leading-tight truncate">
                  {script.title}
                </div>
                {script.subtitle && (
                  <div className="text-[11px] opacity-80 leading-tight">
                    {script.subtitle}
                  </div>
                )}
              </div>
            </div>
            <div className="chat-scroll">
              {messages.map((step, i) => {
                if (step.kind === "system") {
                  return (
                    <div key={i} className="chat-system">
                      {step.text}
                    </div>
                  );
                }
                if (step.kind === "msg") {
                  return (
                    <div
                      key={i}
                      className={`chat-bubble ${step.from === "in" ? "chat-in" : "chat-out"} ${step.faded ? "chat-faded" : ""}`}
                    >
                      <span className="whitespace-pre-line">{step.text}</span>
                      {step.time && <span className="chat-time">{step.time}</span>}
                    </div>
                  );
                }
                return null;
              })}
              {typing && (
                <div className="chat-bubble chat-out typing-dots" style={{ padding: "10px 14px" }}>
                  <span />
                  <span />
                  <span />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Floating outcome chips beside / over the phone (PRD §4.6) */}
        <div className="absolute -right-2 bottom-16 flex flex-col items-end gap-3 sm:-right-10">
          {chips.map(
            (chip, i) =>
              chip.kind === "chip" && (
                <div key={`${count}-${i}`} className="outcome-chip">
                  <span className="icon-chip" style={{ width: 34, height: 34, borderRadius: 10 }}>
                    <Icon name={chip.icon} size={17} />
                  </span>
                  <span>
                    {chip.label}
                    {chip.sub && <span className="chip-sub">{chip.sub}</span>}
                  </span>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
