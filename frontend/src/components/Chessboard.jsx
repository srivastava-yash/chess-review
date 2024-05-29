/* eslint-disable react/prop-types */

export const Chessboard = ({ board }) => {
    return <div>
        {board.map((row, i) => {
            return <div key={i} className="flex">
                {row.map((square, j) => {
                    const squareRepresentation = String.fromCharCode(97 + (j%8)) + "" + (8-i)
                    return <div key={j} className={`w-16 h-16 ${(i+j) % 2 === 0 ? 'bg-orange-400' : 'bg-slate-200'}`}>
                        <div className="w-full h-full justify-center flex">
                            <div className="text-black h-full justify-center flex flex-col">
                                {square ? <img className="w-12" src={`/${square?.color === "b" ? square?.type : `${square?.type?.toUpperCase()}w`}.svg`}/> : null}
                            </div>
                        </div>
                    </div>
                })}
            </div>
        })}

    </div>
}
