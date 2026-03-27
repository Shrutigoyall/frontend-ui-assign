function InfoCard({ item }) {
    return (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <p className="text-slate-500 text-sm">{item.title}</p>
            <h3 className="text-3xl font-bold text-slate-900 mt-2">{item.value}</h3>
            <p className="text-sm text-indigo-600 mt-2">{item.subtitle}</p>
        </div>
    )
}

export default InfoCard