import SidebarMenuItem, { SidebarMenuItemProps } from "./SidebarMenuItem";

interface SidebarMenuListProps {
  title?: string;
  menuList: SidebarMenuItemProps[];
}

export default function SidebarMenuList({ title, menuList }: SidebarMenuListProps) {
  return (
    <ul className="mb-4 flex flex-col gap-1">
      {title && (
        <li className="mx-3.5 mt-4 mb-2">
          <p className="sidebar-menu-title">{title}</p>
        </li>
      )}
      {menuList.map((menuItem, index) => (
        <SidebarMenuItem
          key={index}
          {...menuItem}
        />
      ))}
    </ul>
  );
}
