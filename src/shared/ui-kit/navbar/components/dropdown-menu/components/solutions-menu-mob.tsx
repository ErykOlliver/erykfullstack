import Link from "next/link";
import { FiMonitor, FiGlobe, FiShoppingCart, FiServer, FiSearch, FiZap, FiSmartphone, FiGitMerge } from "react-icons/fi";
import { HiOutlineCursorClick } from "react-icons/hi";
import { LuLayoutDashboard } from "react-icons/lu";

type Solution = {
    id: string
    category: string
    title: string
}

const solutions = [
    {
        id: "web-apps",
        category: "Desenvolvimento Web",
        title: "Web Apps e Sistemas",
    },
    {
        id: "landing-pages",
        category: "Desenvolvimento Web",
        title: "Landing Pages",
    },
    {
        id: "institutional-websites",
        category: "Desenvolvimento Web",
        title: "Sites Institucionais e Portfólios",
    },
    {
        id: "ecommerce-platforms",
        category: "E-commerce e Plataformas",
        title: "Lojas Virtuais com Checkout Completo",
    },
    {
        id: "admin-dashboards",
        category: "E-commerce e Plataformas",
        title: "Painéis Administrativos e Dashboards",
    },
    {
        id: "backend-apis",
        category: "Backend e Integrações",
        title: "APIs e Arquitetura Backend",
    },
    {
        id: "platform-integrations",
        category: "Backend e Integrações",
        title: "Integração com Plataformas e Serviços",
    },
    {
        id: "seo-technical",
        category: "Performance e Otimização",
        title: "SEO Técnico para Sites",
    },
    {
        id: "performance-optimization",
        category: "Performance e Otimização",
        title: "Otimização de Performance",
    },
    {
        id: "mobile-apps",
        category: "Aplicações Mobile",
        title: "Aplicativos Modernos para Dispositivos Móveis",
    }
];

export default function SolutionsMenuMob() {
    const groupedSolutions = solutions.reduce<Record<string, Solution[]>>((acc, solution) => {
        if (!acc[solution.category]) {
            acc[solution.category] = [];
        }

        acc[solution.category].push(solution);
        return acc;
    }, {});


    return (
        <article className='w-full ml-2 grid grid-cols-1'>
            {Object.entries(groupedSolutions).map(([category, items]) => (
                <div key={category} className="flex flex-col w-full h-fit">

                    <h1 className="text-xs border-primary-500 select-none text-black-800 leading-snug max-w-40 border-b-2 font-medium uppercase">
                        {category}
                    </h1>

                    <nav className="py-3 ">
                        <ul className="flex flex-col gap-3">
                            {items.map(item => (
                                <Link href={''} key={item.id} className="flex hover:ml-2 hover:cursor-pointer text-black-600 select-none hover:bg-primary-500/20 transition-all duration-150 items-center p-1.5 gap-2 rounded-md">
                                    <span className="text-xs ">{item.title}</span>
                                </Link>
                            ))}
                        </ul>
                    </nav>

                </div>
            ))}
        </article>
    )
}
