function TemplateCard({ item }) {
    return (
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition min-h-[190px] flex flex-col justify-between">
            <div>
                <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
                    <button className="text-slate-400 text-xl">⋮</button>
                </div>

                <p className="text-sm text-slate-500 mt-3 leading-7">
                    {item.description}
                </p>
            </div>

            <div className="pt-5 border-t border-slate-100 mt-6">
                <p className="text-sm text-slate-500">
                    Created On: <span className="font-medium text-slate-700">{item.date}</span>
                </p>
            </div>
        </div>
    )
}

export default TemplateCard