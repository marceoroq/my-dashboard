import Link from "next/link";
import { usePathname } from "next/navigation";

import Icon from "@/components/Icon";

export interface SidebarMenuItemProps {
  text: string;
  iconName: string;
  url?: string;
}

export default function SidebarMenuItem({ url = "#", text, iconName }: SidebarMenuItemProps) {
  const currentPath = usePathname();

  return (
    <li>
      <Link href={url}>
        <button
          data-active={currentPath === url}
          className="sidebar-menu-item 
                     data-[active=false]:sidebar-menu-item-common
                     data-[active=true]:sidebar-menu-item-active"
          type="button">
          <Icon name={iconName} />
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
            {text}
          </p>
        </button>
      </Link>
    </li>
  );
}
