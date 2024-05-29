import { useState } from 'react'
import { Chess } from 'chess.js'
import { Chessboard } from './components/Chessboard'
import { Sidebar } from './components/Sidebar'

function App() {
    const [chess, setChess] = useState(new Chess())
    const [board, setBoard] = useState(chess.board())

    return (
        <div className='justify-center flex bg-slate-800'>
            <div className='pt-8 max-w-screen-lg w-full'>
                <div className='grid grid-cols-6 gap-4 w-full'>
                    <div className='col-span-4 w-full flex justify-center'>
                        <Chessboard board={board}/>
                    </div>
                    <div className='col-span-2 bg-slate-800 w-full'>
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
