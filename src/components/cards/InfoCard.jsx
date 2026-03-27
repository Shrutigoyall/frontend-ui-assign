function InfoCard({ item }) {
    return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <p className="text-sm text-slate-500">{item.title}</p>
            <h3 className="mt-2 text-3xl font-bold text-slate-900">{item.value}</h3>
            <p className="mt-2 text-sm font-medium text-indigo-600">{item.subtitle}</p>
        </div>
    )
}

export default InfoCard