import { useState } from 'react'
import Sidebar from '../components/layout/Sidebar'
import Topbar from '../components/layout/Topbar'
import TemplateCard from '../components/cards/TemplateCard'
import CreateNewModal from '../components/modal/CreateNewModal'
import { templates } from '../data/dummyData'

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className="flex h-screen flex-col overflow-hidden bg-slate-100">
            <Topbar />

            <div className="flex flex-1 overflow-hidden">
                <Sidebar />

                <main className="flex flex-1 flex-col overflow-hidden bg-slate-100">
                    <div className="flex items-center justify-between border-b border-slate-200 bg-white px-8 py-5 shrink-0">
                        <h2 className="text-2xl font-semibold text-slate-800">
                            Knowledge Base
                        </h2>

                        <div className="flex items-center gap-3">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                            />

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="rounded-md bg-[#4F46E5] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4338CA]"
                            >
                                + Create New
                            </button>
                        </div>
                    </div>

                    <div className="custom-scrollbar flex-1 overflow-y-auto px-6 py-6">
                        <div className="flex min-h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                                {templates.map((item) => (
                                    <TemplateCard key={item.id} item={item} />
                                ))}
                            </div>

                            <div className="flex flex-col gap-4 pt-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
                                <p>6 rows</p>

                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2">
                                        <span>Rows per page</span>
                                        <button className="rounded-lg border border-slate-200 bg-white px-3 py-1 font-medium">
                                            10
                                        </button>
                                    </div>

                                    <p>page 1 of 1</p>

                                    <div className="flex items-center gap-2">
                                        <button className="rounded-lg border border-slate-200 px-3 py-1 transition hover:bg-slate-50">
                                            {'<'}
                                        </button>
                                        <button className="rounded-lg border border-slate-200 px-3 py-1 transition hover:bg-slate-50">
                                            {'>'}
                                        </button>
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