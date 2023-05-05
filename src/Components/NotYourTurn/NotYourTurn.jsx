import './NotYourTurn.css'
import CluelessContext from '../../CluelessContext'
import React, { useEffect, useState } from 'react'
import { images } from '../../utils/cards'
import { characterToKey } from '../../utils/constants'
import { manageRooms } from '../../utils/constants'


const NotYourTurn = () => {

    const {
    //the database which is used when we call get(ref(db,pathToVariable)) to get a specific variable
    //and a ref to the database used when we call update(dbRef,updates) where updates has absolute
    //paths to the variable as well as what to change to (key value pair), from firebase.js import
    db, dbRef,
    //useStates to track firebase real-time database (FBRTDB)
    suggestion, setSuggestion,
    currentTurn, setCurrentTurn,
    gameEnded, setGameEnded,
    gameStarted, setGameStarted,
    players, setPlayers,
    winningCards, setWinningCards,
    //useState to track my specific player
    localPlayer, setLocalPlayer,
    //useState to control what is shown
    showHome, setShowHome,
    showLobby, setShowLobby,
    showGame, setShowGame,
    gameOver, setGameOver,
    //useState so we access the right game in the FBRTDB
    gameCode, setGameCode,
    gameJoined, setGameJoined
    } = React.useContext(CluelessContext)

    //old players used for
    const [oldCurrentPlayer, setOldCurrentPlayer] = useState({})
    const [currentPlayerKey, setCurrentPlayerKey] = useState("")
    //flags to control what is seen
    const [moved, setMoved] = useState(false)

    useEffect( () => {
        if(currentPlayerKey){
            if(players[currentPlayerKey]['location'] != oldCurrentPlayer['location']){
                setMoved(true)
            }
        }
    }, [players])

    useEffect( () => {
        setOldCurrentPlayer(players)
        Object.keys(players).map( (player) => {
            if(players[player]['turn'] == currentTurn){
                setCurrentPlayerKey(player)
                setOldCurrentPlayer(players[player])
            }
        })
        setMoved(false)
    }, [currentTurn])

    return (
    <div className='actionContainer'>
        <h2>It is not Your turn yet</h2>
        <p>It is {oldCurrentPlayer.playerName}'s turn as {oldCurrentPlayer.characterName}</p>
        <img className='card' src = {images[oldCurrentPlayer.characterName]} alt = "Card not found"></img>
        {moved && 
            <div>
                <p>{oldCurrentPlayer.playerName} moved from the {manageRooms[oldCurrentPlayer.location-1]['roomTitle']} to the {manageRooms[players[currentPlayerKey]['location']-1]['roomTitle']}</p>
            </div>
        }
    </div>
    )
}

export default NotYourTurn