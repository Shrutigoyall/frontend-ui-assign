import { Layers } from 'lucide-react'

function Topbar() {
    return (
        <div className="flex h-[64px] items-center justify-between bg-gradient-to-r from-[#1E1B4B] via-[#1E1B4B] to-[#312E81] px-6 text-white shrink-0">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <Layers size={22} className="text-indigo-400" />
                    <h1 className="text-xl font-semibold tracking-tight">Worcspace</h1>
                </div>

                <button className="flex items-center gap-1 rounded-xl bg-white/10 px-3 py-1.5 text-sm font-medium transition hover:bg-white/20">
                    Worcspace 1
                    <span className="text-xs">▾</span>
                </button>
            </div>

            <div className="hidden flex-1 justify-center md:flex">
                <div className="relative w-[420px]">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-white placeholder:text-slate-300 outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-300">
                        ⌘K
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="relative rounded-full p-1 transition hover:bg-white/10">
                    <svg
                        className="h-5 w-5 text-slate-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                    </svg>
                    <span className="absolute right-1 top-1 h-2 w-2 rounded-full border border-[#1E1B4B] bg-red-500"></span>
                </button>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-200 font-semibold text-indigo-900">
                    GK
                </div>
            </div>
        </div>
    )
}

export default Topbar