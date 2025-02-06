import {
  HiBell,
  HiXMark,
  HiHome,
  HiStar,
  HiHeart,
  HiBookmark,
  HiBookOpen,
  HiUserPlus,
  HiUserCircle,
  HiTableCells,
  HiOutlineHeart,
  HiMiniArrowRightOnRectangle,
} from "react-icons/hi2";
import { FaCalculator } from "react-icons/fa6";
import { AiOutlineUser } from "react-icons/ai";
import { TbLayoutSidebarLeftExpandFilled, TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";

const iconMap = {
  star: HiStar,
  bell: HiBell,
  home: HiHome,
  heart: HiHeart,
  close: HiXMark,
  book: HiBookOpen,
  user: HiUserCircle,
  signup: HiUserPlus,
  calc: FaCalculator,
  table: HiTableCells,
  bookmark: HiBookmark,
  outuser: AiOutlineUser,
  outheart: HiOutlineHeart,
  signin: HiMiniArrowRightOnRectangle,
  opensidebar: TbLayoutSidebarLeftExpandFilled,
  closesidebar: TbLayoutSidebarLeftCollapseFilled,
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
