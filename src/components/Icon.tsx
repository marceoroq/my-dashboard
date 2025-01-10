import {
  HiBell,
  HiXMark,
  HiHome,
  HiUserPlus,
  HiUserCircle,
  HiTableCells,
  HiMiniArrowRightOnRectangle,
} from "react-icons/hi2";

const iconMap = {
  bell: HiBell,
  close: HiXMark,
  home: HiHome,
  user: HiUserCircle,
  signin: HiMiniArrowRightOnRectangle,
  signup: HiUserPlus,
  table: HiTableCells,
};

export default function Icon({ name }: { name: string }) {
  const Icon = iconMap[name as keyof typeof iconMap];
  return Icon ? <Icon className="w-5 h-5" /> : null;
}
