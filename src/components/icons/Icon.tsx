import BellIcon from "@/components/icons/BellIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import SigninIcon from "@/components/icons/SigninIcon";
import SignupIcon from "@/components/icons/SignupIcon";
import TableIcon from "@/components/icons/TableIcon";
import UserIcon from "@/components/icons/UserIcon";

const iconMap = {
  BellIcon,
  CloseIcon,
  HomeIcon,
  SigninIcon,
  SignupIcon,
  TableIcon,
  UserIcon,
};

function capitalize(string: string) {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Icon({ name }: { name: string }) {
  const iconName = capitalize(name) + "Icon";
  const Icon = iconMap[iconName as keyof typeof iconMap];
  return Icon ? <Icon /> : null;
}
