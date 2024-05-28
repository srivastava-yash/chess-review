/* eslint-disable react/prop-types */

export const Chessboard = ({ board }) => {
    return <div>
        {board.map((row, i) => {
            return <div key={i} className="flex">
                {row.map((square, j) => {
                    return <div key={j} className={`w-16 h-16 ${(i+j) % 2 === 0 ? 'bg-orange-500' : 'bg-teal-100'}`}>
                        <div className="w-full h-full justify-center flex">
                            <div className="text-black h-full justify-center flex flex-col">
                                {square ? square.type : "" }
                            </div>
                        </div>
                    </div>
                })}
            </div>
        })}

    </div>
}
