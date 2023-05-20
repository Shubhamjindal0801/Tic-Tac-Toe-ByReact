import React,{useState} from 'react';
import './formStyle.css'

const LogInPage = ()=>{
    const [name1,setName1] = useState("")
    const [name2,setName2] = useState("")
    function sendValues(event){
        event.preventDefault();
    }
    
    return(
        <div className="formContainer">
            <form className="myForm" >
                <input type="text" required placeholder="Enter your name:" id="player1Name" />
                <input type="text" required placeholder="Enter your opponent name:" id="player2Name" />
                <button onClick={(event)=>event.preventDefault()} id="logInBtn" >Let's start the game</button>
            </form>
        </div>
    )
}

export default LogInPage;