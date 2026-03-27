function CreateNewModal({ onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex">
            <div className="flex-1 bg-black/30" onClick={onClose}></div>

            <div className="w-full max-w-md bg-white shadow-2xl min-h-screen p-6 flex flex-col">
                <div className="flex items-start justify-between border-b border-slate-200 pb-4">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">
                            Create New Knowledge Base
                        </h2>
                        <p className="text-sm text-slate-500 mt-1">
                            Best for quick answers from documents, websites and text files.
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-slate-700 text-2xl"
                    >
                        ×
                    </button>
                </div>

                <div className="space-y-5 mt-6 flex-1">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Name (Cannot be edited later) <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Description
                        </label>
                        <textarea
                            rows="4"
                            placeholder="Description"
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Vector Store <span className="text-red-500">*</span>
                        </label>
                        <select className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500">
                            <option>Qdrant</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            LLM Embedding Model <span className="text-red-500">*</span>
                        </label>
                        <select className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500">
                            <option>text-embedding-ada-002</option>
                        </select>
                    </div>
                </div>

                <div className="pt-6 flex justify-end">
                    <button className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-6 py-3 rounded-xl font-semibold transition">
                        Create
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateNewModal