function PrimaryButton({ text, onClick, className = '' }) {
    return (
        <button
            onClick={onClick}
            className={`bg-[#4F46E5] hover:bg-[#4338CA] text-white px-5 py-2.5 rounded-xl font-semibold transition ${className}`}
        >
            {text}
        </button>
    )
}

export default PrimaryButton