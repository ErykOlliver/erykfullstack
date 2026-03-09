import { FiMonitor, FiGlobe, FiShoppingCart, FiServer, FiSearch, FiZap, FiSmartphone, FiGitMerge } from "react-icons/fi";
import { HiOutlineCursorClick } from "react-icons/hi";
import { LuLayoutDashboard } from "react-icons/lu";

type Solution = {
  id: string
  category: string
  icon: React.ReactNode
  title: string
  description: string
}

const solutions = [
  {
    id: "web-apps",
    category: "Desenvolvimento Web",
    icon: <FiMonitor className="size-5" />,
    title: "Web Apps e Sistemas",
    description: "Aplicações web completas, escaláveis e seguras, desenvolvidas para resolver problemas reais do seu negócio."
  },
  {
    id: "landing-pages",
    category: "Desenvolvimento Web",
    icon: <HiOutlineCursorClick className="size-5" />,
    title: "Landing Pages",
    description: "Páginas modernas, rápidas e responsivas focadas em conversão e geração de leads."
  },
  {
    id: "institutional-websites",
    category: "Desenvolvimento Web",
    icon: <FiGlobe className="size-5" />,
    title: "Sites Institucionais e Portfólios",
    description: "Sites profissionais que fortalecem a presença digital da sua marca e transmitem credibilidade."
  },
  {
    id: "ecommerce-platforms",
    category: "E-commerce e Plataformas",
    icon: <FiShoppingCart className="size-5" />,
    title: "Lojas Virtuais com Checkout Completo",
    description: "E-commerces com catálogo, carrinho, pagamento integrado e gestão de pedidos."
  },
  {
    id: "admin-dashboards",
    category: "E-commerce e Plataformas",
    icon: <LuLayoutDashboard className="size-5" />,
    title: "Painéis Administrativos e Dashboards",
    description: "Sistemas internos para gestão de dados, relatórios e automação de processos."
  },
  {
    id: "backend-apis",
    category: "Backend e Integrações",
    icon: <FiServer className="size-5" />,
    title: "APIs e Arquitetura Backend",
    description: "Desenvolvimento de APIs seguras e escaláveis para integrar sistemas, aplicativos e serviços."
  },
  {
    id: "platform-integrations",
    category: "Backend e Integrações",
    icon: <FiGitMerge className="size-5" />,
    title: "Integração com Plataformas e Serviços",
    description: "Integração com gateways de pagamento, CRMs, ERPs, automações e APIs externas."
  },
  {
    id: "seo-technical",
    category: "Performance e Otimização",
    icon: <FiSearch className="size-5" />,
    title: "SEO Técnico para Sites",
    description: "Estrutura otimizada para buscadores, melhorando posicionamento e velocidade."
  },
  {
    id: "performance-optimization",
    category: "Performance e Otimização",
    icon: <FiZap className="size-5" />,
    title: "Otimização de Performance",
    description: "Melhoria de carregamento, Core Web Vitals e experiência do usuário."
  },
  {
    id: "mobile-apps",
    category: "Aplicações Mobile",
    icon: <FiSmartphone className="size-5" />,
    title: "Aplicativos Modernos para Dispositivos Móveis",
    description: "Apps conectados ao backend do sistema, ideais para startups e produtos digitais."
  }
];

export default function SolutionsMenu() {
  const groupedSolutions = solutions.reduce<Record<string, Solution[]>>((acc, solution) => {
    if (!acc[solution.category]) {
      acc[solution.category] = [];
    }

    acc[solution.category].push(solution);
    return acc;
  }, {});


  return (
    <article className='w-170 grid grid-cols-3 p-2'>
      {Object.entries(groupedSolutions).map(([category, items]) => (
        <div key={category} className="flex flex-col w-fit h-full">

          <h1 className="text-sm border-primary-500 select-none text-black-800 leading-snug max-w-40 border-b-2 p-1 font-medium uppercase">
            {category}
          </h1>

          <nav className="py-3 ">
            <ul className="flex flex-col gap-2">
              {items.map(item => (
                <li key={item.id} className="flex hover:-translate-y-1 hover:cursor-pointer text-black-600 select-none hover:bg-primary-500/20 transition-all duration-150 items-center p-1.5 gap-2 rounded-md">
                  <div className="w-fit h-fit p-1">
                    {item.icon}
                  </div>
                  <span className="text-xs leading-snug max-w-35">{item.title}</span>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      ))}
    </article>
  )
}
