function CreateNewModal({ onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex">
            <div className="flex-1 bg-black/30" onClick={onClose}></div>

            <div className="w-full max-w-md min-h-screen bg-white shadow-2xl p-6 flex flex-col">
                <div className="flex items-start justify-between border-b border-slate-200 pb-4">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">
                            Create New Knowledge Base
                        </h2>
                        <p className="mt-1 text-sm text-slate-500">
                            Best for quick answers from documents, websites and text files.
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="text-2xl text-slate-400 hover:text-slate-700"
                    >
                        ×
                    </button>
                </div>

                <div className="mt-6 flex-1 space-y-5">
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                            Name (Cannot be edited later) <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                            Description
                        </label>
                        <textarea
                            rows="4"
                            placeholder="Description"
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                        ></textarea>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                            Vector Store <span className="text-red-500">*</span>
                        </label>
                        <select className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500">
                            <option>Qdrant</option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                            LLM Embedding Model <span className="text-red-500">*</span>
                        </label>
                        <select className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500">
                            <option>text-embedding-ada-002</option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-end pt-6">
                    <button className="rounded-xl bg-[#4F46E5] px-6 py-3 font-semibold text-white transition hover:bg-[#4338CA]">
                        Create
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateNewModal