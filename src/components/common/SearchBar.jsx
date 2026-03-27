function SearchBar() {
    return (
        <div className="w-full md:w-[260px]">
            <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white outline-none focus:ring-2 focus:ring-indigo-500"
            />
        </div>
    )
}

export default SearchBar