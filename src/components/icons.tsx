import {
  Bot,
  MessagesSquare,
  Users,
  Repeat,
  CalendarDays,
  ClipboardList,
  Table2,
  BarChart3,
  Stethoscope,
  Scissors,
  Store,
  Wrench,
  GraduationCap,
  UserPlus,
  CalendarCheck,
  Send,
  Bell,
  CheckCircle2,
  IndianRupee,
  Package,
  PhoneMissed,
  type LucideIcon,
} from "lucide-react";

/** String → Lucide icon map so content files stay serialisable. */
const map: Record<string, LucideIcon> = {
  bot: Bot,
  messages: MessagesSquare,
  users: Users,
  repeat: Repeat,
  calendar: CalendarDays,
  clipboard: ClipboardList,
  table: Table2,
  chart: BarChart3,
  stethoscope: Stethoscope,
  scissors: Scissors,
  store: Store,
  wrench: Wrench,
  graduation: GraduationCap,
  "user-plus": UserPlus,
  "calendar-check": CalendarCheck,
  send: Send,
  bell: Bell,
  check: CheckCircle2,
  rupee: IndianRupee,
  package: Package,
  "phone-missed": PhoneMissed,
};

export function Icon({
  name,
  size = 22,
  className,
  strokeWidth = 1.5,
}: {
  name: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
}) {
  const C = map[name] ?? Bot;
  return <C size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />;
}
