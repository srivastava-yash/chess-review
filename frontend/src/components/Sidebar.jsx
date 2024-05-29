import { useState } from "react"
import { Button } from "./Button"


export const Sidebar = () => {
    const [isFetch, setIsFetch] = useState(true)
    const [games, setGames] = useState([])

    return (
    <div>
        <div className="text-white justify-center flex">
            <input className="w-full bg-black-800 h-12 px-4 rounded" placeholder="Username..." />
        </div>
        <div className="py-4 justify-center flex">
            <Button isFetch={isFetch}/>
        </div>
    </div>
    )
}
