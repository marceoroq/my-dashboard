import Image from "next/image";

import Icon from "@/components/Icon";
import { SidebarMenuItemProps } from "./SidebarMenuItem";
import SidebarMenuList from "./SidebarMenuList";

const menuOptions: SidebarMenuItemProps[] = [
  { url: "/dashboard", text: "dashboard", iconName: "home" },
  { url: "/counter", text: "counter", iconName: "calc" },
  { url: "/books", text: "books", iconName: "book" },
  // { text: "notifications", iconName: "bell" },
  // { url: "/profile", text: "profile", iconName: "user" },
];

const authOptions: SidebarMenuItemProps[] = [
  { text: "sign in", iconName: "signin" },
  { text: "sign up", iconName: "signup" },
];

export default function Sidebar() {
  //-translate-x-80
  return (
    <aside className="bg-gradient-to-br from-gray-800 to-gray-900 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
      <div className="relative border-b border-white/20">
        <a
          className="flex items-center gap-4 py-6 px-8"
          href="#/">
          <Image
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="Rounded avatar"
          />
          <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
            Marcelo Oroquieta
          </h6>
        </a>
        <button
          className="font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          type="button">
          <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <Icon name="close" />
          </span>
        </button>
      </div>
      <div className="m-4">
        <SidebarMenuList menuList={menuOptions} />
        <SidebarMenuList
          title="auth pages"
          menuList={authOptions}
        />
      </div>
    </aside>
  );
}
