function TemplateCard({ item }) {
    return (
        <div className="min-h-[190px] rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md flex flex-col justify-between">
            <div>
                <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>

                    <button
                        type="button"
                        className="text-slate-400 text-xl leading-none transition hover:text-slate-600"
                    >
                        ⋮
                    </button>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                </p>
            </div>

            <div className="mt-6 border-t border-slate-100 pt-5">
                <p className="text-sm text-slate-500">
                    Created On:{' '}
                    <span className="font-medium text-slate-700">{item.date}</span>
                </p>
            </div>
        </div>
    )
}

export default TemplateCard