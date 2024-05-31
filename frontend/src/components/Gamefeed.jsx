export const Gamefeed = ({games}) => {
    return (
    <div className="max-h-96 overflow-y-auto border border-slate-400 border-[3px] rounded-xl scrollbar-thin">
      {games.map((game, index) => (
       <div key={index} className="p-2 mb-2 rounded-xl bg-slate-700 text-white font-semibold text-center">
            {game.white.username}({game.white.rating}) vs. {game.black.username}({game.black.rating})
        </div>
      ))}
    </div>
  )
}
