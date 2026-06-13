'use client'

import SideBarButton from "./components/sidebar-button/sidebar-button"
import { MdAdminPanelSettings, MdDashboard, MdPayments } from "react-icons/md"
import { TbCashRegister } from "react-icons/tb";
import { RxExit } from "react-icons/rx";
import { signOut, useSession } from "next-auth/react";
import { hasPermission } from "@/src/shared/libs/has-permission";
import { Permissions } from "@/src/shared/libs/permissions-enum";

export default function Sidebar() {

    const { data } = useSession()

    const role = data?.user.role

    const menuItems = [
        {
            name: 'Dashboard',
            href: '/dashboard',
            icon: <MdDashboard className="size-5" />,
            canAcess: true
        },
        {
            name: 'Orçamentos e pagamentos',
            href: '/dashboard/budgets-and-payments', icon: <TbCashRegister className="size-5" />,
            canAcess: role ? hasPermission(role, Permissions.MANAGE_BUDGETS) : false
        },
        {
            name: 'Gerenciar administradores',
            href: '/dashboard/manage_administrators', icon: <MdAdminPanelSettings className="size-5" />,
            canAcess: role ? hasPermission(role, Permissions.MANAGE_ADMINS) : false
        },
    ]

    return (
        <div className="w-full h-full flex flex-col items-center justify-between">
            <nav className="w-full h-fit flex flex-col gap-3">
                {menuItems.map((item) => (
                    <SideBarButton disabled={item.canAcess} icon={item.icon} key={item.href} href={item.href} name={item.name} />
                ))}
            </nav>
            <button onClick={() => signOut()}>
                <RxExit className="size-8 text-black-800 hover:cursor-pointer" />
            </button>
        </div>
    )
}
