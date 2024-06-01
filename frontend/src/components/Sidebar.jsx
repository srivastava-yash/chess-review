import { useState } from "react"
import axios from "axios"
import { Gamefeed } from "./Gamefeed"


export const Sidebar = () => {
    const [isFetch, setIsFetch] = useState(true)
    const [username, setUsername] = useState("")
    const [games, setGames] = useState([])
    const [game, setGame] = useState([])
    const [positions, setPositions] = useState([])

    function handleChange(e) {
        setUsername(e.target.value)
    }

    const fetchGames = async () => {
        try {
        const gamesResponse = await axios.post(import.meta.env.VITE_FETCH_GAMES_URL, {
            'username': username,
        })
        setGames(gamesResponse.data.games)
        setIsFetch(false)
        }
        catch (error) {
            console.log(`Error while fetching games: ${error}`);
        }
    }

    return (
        <div className="bg-slate-900 rounded-xl">
            <div className="bg-green-500 text-white font-bold text-2xl p-1 items-center rounded-lg flex justify-center">
                <img src="/Pw.svg" alt="Chess Piece" className="w-12 h-12"/>
                <span>Game Review</span>
            </div>
            {positions.length == 0 && <div>
                <div className="text-black justify-center flex mt-2">
                    <input className="w-full bg-black-800 h-12 px-4 rounded" placeholder="Username..." onChange={handleChange}/>
                </div>
                <div className="py-2 justify-center flex">
                    {isFetch && <button onClick={fetchGames} className="px-2 py-2 w-28 h-12 text-2xl bg-green-500 hover:bg-green-700 text-white font-bold rounded">
                        Fetch
                    </button>}
                </div>
                { isFetch == false && <Gamefeed games={games} setGame={setGame} setPositions={setPositions}/>}
            </div>
            }
        </div>
    )
}
