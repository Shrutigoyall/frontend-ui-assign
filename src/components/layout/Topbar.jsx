import SearchBar from '../common/SearchBar'
import PrimaryButton from '../common/PrimaryButton'
import { Layers } from 'lucide-react'

function Topbar() {
    return (
        <div className="bg-gradient-to-r from-[#1E1B4B] via-[#1E1B4B] to-[#312E81] text-white h-[64px] px-6 flex items-center justify-between shrink-0">

            {/* LEFT */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <Layers size={22} className="text-indigo-400" />
                    <h1 className="text-xl font-semibold tracking-tight">Worcspace</h1>
                </div>

                <button className="bg-white/10 hover:bg-white/20 transition px-3 py-1.5 rounded-xl text-sm font-medium flex items-center gap-1">
                    Worcspace 1
                    <span className="text-xs">▾</span>
                </button>
            </div>

            {/* CENTER SEARCH */}
            <div className="hidden md:flex flex-1 justify-center">
                <div className="w-[420px] relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-300 outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-300">
                        ⌘K
                    </span>
                </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-4">
                    <button className="relative p-1 hover:bg-white/10 rounded-full transition">
                        <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 border border-[#1E1B4B] rounded-full"></span>
                    </button>
                    <div className="w-9 h-9 rounded-full bg-indigo-200 text-indigo-900 flex items-center justify-center font-semibold">
                        GK
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar