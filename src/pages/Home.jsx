import { useState } from 'react'
import Sidebar from '../components/layout/Sidebar'
import Topbar from '../components/layout/Topbar'
import TemplateCard from '../components/cards/TemplateCard'
import CreateNewModal from '../components/modal/CreateNewModal'
import { templates } from '../data/dummyData'

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className="h-screen flex flex-col bg-slate-100 overflow-hidden">
            {/* Dark Topbar spans entire width */}
            <Topbar />

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar touches the Topbar */}
                <Sidebar />

                {/* Main content area specifically to the right of Sidebar */}
                <main className="flex-1 flex flex-col overflow-hidden bg-slate-100">

                    {/* Knowledge Base Header - Now inside Main to touch Sidebar */}
                    <div className="flex items-center justify-between px-8 py-5 bg-white border-b border-slate-200 shrink-0">
                        <h2 className="text-2xl font-semibold text-slate-800">
                            Knowledge Base
                        </h2>

                        <div className="flex items-center gap-3">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="px-4 py-2 rounded-md border border-slate-200 bg-white text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                            />

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-4 py-2 rounded-md text-sm font-semibold transition"
                            >
                                + Create New
                            </button>
                        </div>
                    </div>

                    {/* Scrollable Knowledge Base Content */}
                    <div className="flex-1 overflow-y-auto px-6 py-6 custom-scrollbar">
                        <div className="bg-white border border-slate-200 rounded-2xl p-4 min-h-full flex flex-col justify-between">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                                {templates.map((item) => (
                                    <TemplateCard key={item.id} item={item} />
                                ))}
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 text-sm text-slate-600">
                                <p>6 rows</p>

                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2">
                                        <span>Rows per page</span>
                                        <button className="border border-slate-200 px-3 py-1 rounded-lg bg-white font-medium">
                                            10
                                        </button>
                                    </div>

                                    <p>page 1 of 1</p>

                                    <div className="flex items-center gap-2">
                                        <button className="border border-slate-200 px-3 py-1 rounded-lg hover:bg-slate-50 transition">{'<'}</button>
                                        <button className="border border-slate-200 px-3 py-1 rounded-lg hover:bg-slate-50 transition">{'>'}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {isModalOpen && <CreateNewModal onClose={() => setIsModalOpen(false)} />}
        </div>
    )
}

export default Home