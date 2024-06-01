import axios from "axios"

export const Gamefeed = ({games, setGame, setPositions}) => {
    const handleGameClick = async (index) => {
        setGame(games[index])
        const parsedGameResponse = await axios.post(import.meta.env.VITE_GAME_PARSE_URL, {
            'pgn': games[index].pgn
        })
        const positions = parsedGameResponse.data.positions
        setPositions(positions)
    }

    return (
    <div className="max-h-96 overflow-y-auto border border-slate-400 border-[3px] rounded-xl scrollbar-thin">
      {games.map((game, index) => (
       <div key={index} className="p-2 mb-2 rounded-xl bg-slate-700 text-white font-semibold text-center hover:cursor-pointer" onClick={() => handleGameClick(index)}>
            {game.white.username}({game.white.rating}) vs. {game.black.username}({game.black.rating})
        </div>
      ))}
    </div>
  )
}
