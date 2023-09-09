import { useState, useEffect } from "react"

export default function ScoreBoard() {
    const [players, setPlayers] = useState([{
        id: Date.now() * Math.random(),
        name: "Trang"
    }])
    const [count, setCount] = useState(0)
    function addNewPlayers(e) {
        console.log("đã vào func add");
        e.preventDefault();
        let newPlayers = {
            id: Date.now() * Math.random(),
            name: e.target.newName.value,
        }
        setPlayers([...players, newPlayers])
    }
    function deletePlayers(playersId) {
        setPlayers(players.filter( doItem => doItem.id != playersId))
        
    }
    useEffect(() => {
        console.log("players", players)
    }, [players])

    return (
        <>
            <div className="container">
                <div className="main">
                    <div className="main__hearder">
                        <div className="score">
                            <div>
                                Players: <span />
                            </div>
                            <div>
                                Total Points: <span />
                            </div>
                        </div>
                        <div className="heading">BẢNG ĐIỂM</div>
                    </div>
                    <div id="mainBody">
                            <ul>
                                {players.map((doItem) => (
                                    <li style={{ listStyleType: "none" }} key={players.id}>
                                        <div className="main__body">
                                        <div className="main__body--left">
                                            <div className="player">
                                                <span>
                                                    <button onClick={() => { deletePlayers(doItem.id)}}>X</button>
                                                </span>
                                                <i className="fa-sharp fa-solid fa-crown" />
                                                <span>{doItem.name}</span>
                                            </div>
                                        </div>
                                        <div className="main__body-right">
                                            <div className="score__change">
                                                    <div className="score__change--minus-plus"><button>-</button></div>
                                                <div className="score__change--total">0</div>
                                                    <div className="score__change--minus-plus"><button>+</button></div>
                                            </div>
                                        </div>
                                    </div>
                                    </li>
                                ))}
                            </ul>
                       
                    </div>
                  
                        <form onSubmit={(e) => {
                            addNewPlayers(e)
                        }}>
                        <div className="main__footer">
                            <div className="main__footer-left">
                                <input name='newName' type="text" placeholder="Enter a player's name" />
                            </div>
                            <div className="main__footer-right">
                                <button className="btn__add">
                                    ADD PLAYER
                                </button>
                            </div>
                        </div>
                        </form>
                </div>
            </div>

        </>
    )
}
