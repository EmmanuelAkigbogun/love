import React, {useRef, useState } from "react";
import { online } from "./online";
import { fetchData } from "./online";
import { downloadListFile } from "./Files";
import { fileBoolean } from "./Files";
import { connection } from "./online";
import {settimervar} from ""./Files"
online()
let wordas=0;
let wrongWords=0;
let letteras=0;
let TimerOff=false
let TimeLimitOne=false;
let time=0;
let oldBattery;
let arrayWordGrouping=[];
export let batteryChanged;
let battery;
let continuedTimer=false;
let DurationInSeconds=0;
let timerPause=false;
function App({fetchMethod}) {
  let [value,setvalue]=useState("")
  let [timerstate,settimerstate]=useState("Timer")
  let [minutesState,setminutesState]=useState("3")
    let [oneTimeBoolean,setoneTimeBoolean]=useState(false)
  let [values,setvalues]=useState(window.localStorage.getItem(`fetchData${22}`)==null?
  1:Number(window.localStorage.getItem(`fetchData${22}`))+1)
  let [states,setstates]=useState("")
  let [stopWatchDisplay,setstopWatchDisplay]=useState("Stop Watch => 0:0:0")
  let textareas=useRef(null)
  let paragraph=useRef(null)
  
  window.ondeviceorientation=()=>{
    if(!oneTimeBoolean){
      stopWatch()
      setoneTimeBoolean(oneTimeBoolean=true);
    }      
  }

 let secondsToTime=(DurationInSeconds)=>{
    let hourTracker=parseInt(DurationInSeconds/3600)
    let minuteTracker=parseInt((DurationInSeconds-hourTracker*3600)/60)
    let hourToSec=hourTracker*3600
     if(TimeLimitOne&&hourTracker==0
         &&minuteTracker==Number(minutesState)
         &&(DurationInSeconds-hourToSec-minuteTracker*60)==0){
         TimerOff=true;TimeLimitOne=false;
          textareas.current.setAttribute("maxlength",value.length)
     }
     else{TimerOff=false}
    return "Stop Watch => "
    +hourTracker+":"
    +minuteTracker+":"
    +(DurationInSeconds-hourToSec-minuteTracker*60)
  }
  let stopWatch=()=>{
    TimerOff=false
    setstopWatchDisplay(e=>e="Stop Watch => 0:0:0")
     DurationInSeconds=0;
    time=setInterval(async() => {
      if(TimerOff){clearInterval(time)}
      if(!TimerOff&&!timerPause){
          DurationInSeconds++;
         setstopWatchDisplay(secondsToTime(DurationInSeconds))
      }
       battery=navigator.getBattery();
      if(oldBattery!=(await battery).level*100+"%"){
            console.log("%c Device battery: "+parseInt((await battery).level*100)
            +"%","color:purple;background-color:white;font-size:1rem")
            oldBattery=(await battery).level*100+"%"
            batteryChanged=(await battery).level*100+"%"
      }
      }, 1000)
    }
   return (
    <>
      <h1>Type Speed</h1>
      <div className="card">
            <p 
            onSelect={(e)=>{
                e.target.blur();
}}
            ref={paragraph} className="read-the-docs" >
              {states}
            </p>
      </div>
      <textarea 
          ref={textareas} 
          type="text" 
          rows="3" 
          value={value} 
          onChange={(e)=>{
              setvalue(value=e.target.value)
          }}  
          onKeyDown={(e)=>{
            if(TimeLimitOne&&TimerOff){
             stopWatch()
             TimerOff=false
             continuedTimer=false;
            }
            if(continuedTimer){
              stopWatch()
              continuedTimer=false;
            }
            if(timerPause){
              timerPause=false;
            }
            e.target.value.split(" ").length==paragraph.current.innerText.split(" ").length
            &&paragraph.current.innerText!=""&&e.key==" "&&e.preventDefault()
          
          }}
          onKeyUp={(e)=>{
             if(paragraph.current.innerText!=""){
                    arrayWordGrouping= e.target.value.split(" ");
                    let pararray=paragraph.current.innerText.split(" ")
                    .slice(0, e.target.value.split(" ").length)
                    let pararraye=paragraph.current.innerText.split(" ")
                    .slice(e.target.value.split(" ").length,paragraph
                    .current.innerText.split(" ").length)
                    //wrongString=""
                     let arrayJoint=e.target.value.split(" ").map((x,i)=>
                     pararray[i].includes(arrayWordGrouping[i])
                     &&pararray[i].slice(0,arrayWordGrouping[i].length+1)
                     ==(arrayWordGrouping[i].slice(0,arrayWordGrouping[i].length+1))?
                     x='<mark class="blue">'+pararray[i]+'</mark>':
                     x='<mark class="red">'
                     +pararray[i].slice(0,arrayWordGrouping[i].length)
                     +'</mark>'+pararray[i].slice(arrayWordGrouping[i].length,pararray[i].length)
                    )
                    console.log(arrayJoint)
                    let arrayjoint1=arrayJoint.filter(e=>e.includes('<mark class="red">'))
                    paragraph.current.innerHTML=arrayJoint
                    .join(" ")+" "+pararraye
                    .join(" ");
             }
              if(e.target.value.split(" ").length==paragraph.current.innerText.split(" ").length
              &&paragraph.current.innerText!=""
              &&String(e.target.value.split(" ")
              .slice((e.target.value.split(" ").length)-1))
              ===String(paragraph.current.innerText.split(" ")
              .slice((paragraph.current.innerText.split(" ").length)-1))
              
              ){//.length instance skip at end
                  wordas+=value.split(" ").length//-paragraph.current.innerHTML.split("red").length-1
                  wrongWords+=paragraph.current.innerHTML.split("red").length-1;
                  letteras+=value.length
                  setvalue(value="")
                  connection(fileBoolean,setvalues,setstates,values,downloadListFile,fetchData)
                  timerPause=true
              }
          }}
          >
      </textarea>
      <br />
      <br />
      <button
          onClick={()=>{
            timerPause?timerPause=false:timerPause=true
          }}
      >
           {stopWatchDisplay}</button>
      <br />
      <br />
      <button onClick={(e)=>{
        if(e.target.innerText=="Timer"){
          settimerstate(timerstate="Stop Timer")
          setvalue(value="")
          clearInterval(time)
          continuedTimer=true;
          setstopWatchDisplay(e=>e="Stop Watch => 0:0:0")
          textareas.current.focus()
          connection(fileBoolean,setvalues,setstates,values,downloadListFile,fetchData)
         textareas.current.removeAttribute("maxlength")
        }
        else{
              settimerstate(timerstate="Timer")
             clearInterval(time)
        }
      }}>
        {timerstate}
      </button>
      <button 
          onClick={async()=>{
              textareas.current.removeAttribute("maxlength")
              TimerOff=true
              TimeLimitOne=true;
              setstopWatchDisplay(e=>e="Stop Watch => 0:0:0")
              setvalue(value="")
              textareas.current.focus()
              connection(fileBoolean,setvalues,setstates,values,downloadListFile,fetchData)
          }}       
          onMouseOver={
            (e)=>{
              e.target.focus()
            }
          }
          onMouseOut={
            (e)=>{
              e.target.blur()
            }
          }
          onKeyDown={(e)=>{
            Number(e.key)==NaN?e.key:setminutesState(s=>s=e.key)
            console.log(e)
          }}
      >Timer ({Number(minutesState)} min)</button>
      <br />
      <br />
      <section className="read-the-docs">
        <button>
        words : {
            value==""?0:value.split(" ").length+wordas+" "
        }
        <br />  
        wrong words : {
            value==""?0:(paragraph.current.innerHTML.split("red").length-1)+wrongWords+" "
        }
        <br />  
        letters : {
            value==""?0:value.length+letteras
        }
        <br />
        correct words : {
            value==""?0+"/"+"min":parseInt((((value.split(" ").length+wordas)-((paragraph.current.innerHTML.split("red").length-1)+wrongWords))/(DurationInSeconds/60)))+"/mins"
        }
        <br />
        letters : {
            value==""?0+"/"+"min":parseInt((value.length+letteras)/(DurationInSeconds/60))+"/mins"
        }
        </button> 
      </section>
    </>
  )
}
export default App