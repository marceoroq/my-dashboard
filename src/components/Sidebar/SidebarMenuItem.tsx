"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Icon from "../icons/Icon";

export interface SidebarMenuItemProps {
  url?: string;
  text: string;
  iconName: string;
}

export default function SidebarMenuItem({ url = "#", text, iconName }: SidebarMenuItemProps) {
  const pathname = usePathname();
  const isActive = pathname === url;

  return (
    <li>
      <Link
        className={isActive ? "active" : ""}
        href={url}>
        <button
          className={`sidebar-menu-item ${
            isActive ? "sidebar-menu-item-active" : "sidebar-menu-item-common"
          }`}
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
