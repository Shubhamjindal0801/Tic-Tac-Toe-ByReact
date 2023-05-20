import React, { useState } from "react";
import Icon from "./Components/Icons.jsx";
import {ToastContainer , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let tikArray = new Array(9).fill("");
const App = () => {
  let [isCross, setIsCross] = useState(true);
  let [winMsg, setWinMsg] = useState("");

  //play Again
  const playAgain = () => {
    tikArray.fill("");
    setIsCross(true);
    setWinMsg("");
  };

  //Find Winner
  const findWinner = () => {
    //row 1
    if (
      tikArray[0] == tikArray[1] &&
      tikArray[0] == tikArray[2] &&
      tikArray[0] !== ""
    ) {
      setWinMsg(`${tikArray[0]} has won`);
    }
    //row 2
    else if (
      tikArray[3] == tikArray[4] &&
      tikArray[3] == tikArray[5] &&
      tikArray[3] !== ""
    ) {
      setWinMsg(`${tikArray[3]} has won`);
    }
    //row 3
    else if (
      tikArray[6] == tikArray[7] &&
      tikArray[6] == tikArray[8] &&
      tikArray[6] !== ""
    ) {
      setWinMsg(`${tikArray[6]} has won`);
    }
    //column 1
    else if (
      tikArray[0] == tikArray[3] &&
      tikArray[0] == tikArray[6] &&
      tikArray[0] !== ""
    ) {
      setWinMsg(`${tikArray[0]} has won`);
    }
    //column 2
    else if (
      tikArray[1] == tikArray[4] &&
      tikArray[1] == tikArray[7] &&
      tikArray[1] !== ""
    ) {
      setWinMsg(`${tikArray[1]} has won`);
    }
    //column 3
    else if (
      tikArray[2] == tikArray[5] &&
      tikArray[2] == tikArray[8] &&
      tikArray[2] !== ""
    ) {
      setWinMsg(`${tikArray[2]} has won`);
    }
    //diagonal 1
    else if (
      tikArray[0] == tikArray[4] &&
      tikArray[0] == tikArray[8] &&
      tikArray[0] !== ""
    ) {
      setWinMsg(`${tikArray[0]} has won`);
    }
    //diagonal 2
    else if (
      tikArray[2] == tikArray[4] &&
      tikArray[2] == tikArray[6] &&
      tikArray[2] !== ""
    ) {
      setWinMsg(`${tikArray[2]} has won`);
    }
    else if(tikArray.indexOf("")==-1){
        setWinMsg("Draw")
    }
  };

  //change item
  const ChangeItem = (index) => {
    if(winMsg)
        return toast("Game has already been over.")
    if (tikArray[index] !== "") {
      return toast("Open your eyes dude where are you tapping")
    } else {
      tikArray[index] = isCross == true ? "cross" : "circle";
      setIsCross(!isCross);
    }
    findWinner()
  };

  const getKey = ()=>{
    return Date.now().toString();
  }
  function showMsg(){
    return toast(`Player won ${winMsg}`)
  }
  
  return (
    <div>
        <ToastContainer position="bottom-center"  />
      {
        winMsg !== "" ? (
            <div className="winMsg">
                <h1>{winMsg.toUpperCase()}</h1>
                <button className="playAgain" onClick={playAgain}>Play Again</button>
            </div>
        ) : (
            <h1 id="chance"> Chance is of {isCross ? "X" : "O"}</h1>
        )
       }
    
      <div className="grid">
        {
            tikArray.map((value,index)=>(
                <div className="box" key={index} onClick={()=>ChangeItem(index)}>
                    <Icon ic={value}/>
                </div>
            ))
        }
    </div>
    
    </div>
  );
};

export default App;
