
export const Button = ({ onclick, isFetch }) => {
    return <button onClick={onclick} className="px-2 py-2 w-28 h-12 text-2xl bg-green-500 hover:bg-green-700 text-white font-bold rounded">
        {isFetch === true ? "Fetch" : "Analyse"}
    </button>

}
