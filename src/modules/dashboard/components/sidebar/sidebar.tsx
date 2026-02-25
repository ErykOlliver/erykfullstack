'use client'

import SideBarButton from "./components/sidebar-button/sidebar-button"
import { MdDashboard } from "react-icons/md"
import { FaBox } from "react-icons/fa"
import { RxExit } from "react-icons/rx";
import { signOut } from "next-auth/react";

export default function Sidebar() {

    const menuItems = [
        { name: 'Dashboard', href: '/dashboard', icon: <MdDashboard className="size-5" /> },
        { name: 'Projetos', href: '/dashboard/projetos', icon: <FaBox className="size-5" /> },
    ]

    return (
        <div className="w-full h-full flex flex-col items-center justify-between">
            <nav className="w-full h-fit flex flex-col gap-3">
                {menuItems.map((item) => (
                    <SideBarButton icon={item.icon} key={item.href} href={item.href} name={item.name} />
                ))}
            </nav>
            <button onClick={() => signOut()}>
                <RxExit className="size-8 text-black-800 hover:cursor-pointer" />
            </button>
        </div>
    )
}
