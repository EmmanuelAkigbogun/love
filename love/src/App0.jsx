import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
function App() {
  let [love,newlove]=useState(0)
  let seca=0;
  let mina=0;
  let houa=0;
  let stuff=0;
  let secondsToTime=(stuff)=>{
    houa=parseInt(stuff/3600)
    mina=parseInt((stuff-houa*3600)/60)
    let hourtosec=houa*3600
    return houa+":"+mina+":"+(stuff-hourtosec-mina*60)
  }
 let stopWatch=(e)=>{
    e.target.innerHTML=new Date().toLocaleTimeString()
    fingers.innerHTML="0:0:0"
    seca=0;mina=0;houa=0
    button.innerHTML=new Date().toLocaleTimeString()
    let time=setInterval(() => {
      e.target.innerHTML=new Date()
      .toLocaleTimeString()
      stuff=0;
      new Date()
      .toLocaleTimeString().split(":")
      .map((e,i)=>(
        (
          parseInt(e)-parseInt(
            button.innerHTML.split(":")[i]
          )
        )
        ))
        .reverse()
        .map((q,l)=>q*(60**l))
        .map(e=>stuff+=e)
        fingers.innerHTML=secondsToTime(stuff)
      }, 1000)
      }
  window.onload=(e)=>{hill_fingers.click()}
  window.onclick=(e)=>{console.log(e.target);}
   return (
    <>
      <img src="twi.png" type="" />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={()=>newlove(love=love+1)}>
          count is {love}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <input type="text" onInput={(e)=>{
          console.log(e.target.value);
          count=e.target.value.length}}/>
        <button id="button"></button>
      </div>
      <button g="hu" id="hill_fingers" onClick={stopWatch}>
      </button>
      <button id="fingers"></button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

