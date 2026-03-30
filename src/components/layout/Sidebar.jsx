import {
    Bot,
    Brain,
    Library,
    Database,
    Server,
    Activity,
    Zap,
    Briefcase,
    Shield,
    Key,
    Settings,
} from 'lucide-react'

function Sidebar() {
    return (
        <aside className="hidden min-h-screen w-[235px] border-r border-slate-200 bg-white px-5 py-6 md:block">
            <div className="space-y-8">
                <div>
                    <p className="mb-4 text-xs font-semibold uppercase text-slate-400">
                        My Projects
                    </p>
                    <nav className="space-y-2">
                        <SidebarItem label="Agents" icon={Bot} />
                        <SidebarItem label="AI Models" icon={Brain} />
                        <SidebarItem label="Library" icon={Library} />
                    </nav>
                </div>

                <div>
                    <p className="mb-4 text-xs font-semibold uppercase text-slate-400">
                        Orchestrator
                    </p>
                    <nav className="space-y-2">
                        <SidebarItem label="Published" icon={Database} />
                        <SidebarItem label="Machines" icon={Server} />
                        <SidebarItem label="Queues" icon={Activity} />
                        <SidebarItem label="Triggers" icon={Zap} />
                        <SidebarItem label="Jobs" icon={Briefcase} />
                        <SidebarItem label="Executions" icon={Activity} />
                        <SidebarItem label="Vault" icon={Shield} />
                        <SidebarItem label="Knowledge Base" icon={Database} active />
                        <SidebarItem label="Key Store" icon={Key} />
                    </nav>
                </div>

                <div>
                    <p className="mb-4 text-xs font-semibold uppercase text-slate-400">
                        Admin
                    </p>
                    <nav className="space-y-2">
                        <SidebarItem label="Tenant" icon={Settings} />
                        <SidebarItem label="Integrations" icon={Settings} />
                    </nav>
                </div>
            </div>
        </aside>
    )
}

function SidebarItem({ label, icon: Icon, active = false }) {
    return (
        <button
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${active
                ? 'border-l-4 border-indigo-600 bg-indigo-50 text-indigo-600'
                : 'text-slate-600 hover:bg-slate-50'
                }`}
        >
            {Icon && <Icon size={18} />}
            {label}
        </button>
    )
}

export default Sidebar