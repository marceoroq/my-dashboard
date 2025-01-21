import {
  HiBell,
  HiXMark,
  HiHome,
  HiStar,
  HiBookmark,
  HiBookOpen,
  HiUserPlus,
  HiUserCircle,
  HiTableCells,
  HiMiniArrowRightOnRectangle,
} from "react-icons/hi2";
import { FaCalculator } from "react-icons/fa6";
import { AiOutlineUser } from "react-icons/ai";

const iconMap = {
  bell: HiBell,
  close: HiXMark,
  home: HiHome,
  user: HiUserCircle,
  outuser: AiOutlineUser,
  signin: HiMiniArrowRightOnRectangle,
  signup: HiUserPlus,
  table: HiTableCells,
  calc: FaCalculator,
  book: HiBookOpen,
  star: HiStar,
  bookmark: HiBookmark,
};

export default function Icon({
  name,
  className = "w-5 h-5",
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name as keyof typeof iconMap];

  return Icon ? <Icon className={className} /> : null;
}
