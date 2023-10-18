import { fetchFunction } from "./Fetch";
export let fetchData=[10,9,8,7,6,5,4,3,2,1]
//let storedvalue=1
export let online=()=>{
navigator.onLine&&
 fetchData.map(async(e)=>{
    window.localStorage.setItem(`fetchData${e}`,await fetchFunction(true)+"\n"+await fetchFunction(true))
 })
}

export   let secondsToTime=(DurationInSeconds,TimeLimitOne,TimerOff)=>{
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
  
  export let connection=(fileBoolean,setvalues,setstates,values,downloadListFile,fetchData)=>{
      console.log(fileBoolean)
    if(!fileBoolean&&(downloadListFile.split("&").length)!=0){
          if(values<(downloadListFile.split("&").length-1)){
        setvalues(values+1)
        setstates(e=>e=downloadListFile.split("&")[values])
    }
    else{
      setvalues(e=>e=0)      
      setstates(e=>e=downloadListFile.split("&")[downloadListFile.split("&").length-1])
    }
     console.log("%c"+fileBoolean+"file","color:green")
      window.localStorage.setItem(`fetchData${22}`,values);
    }
    else{
    if(navigator.onLine){
    fetchData.map( 
        async e=> e==1?
         window.localStorage.setItem(`fetchData${e}`,await fetchMethod(true)+"\n"+await fetchMethod(true)):
         window.localStorage.getItem(`fetchData${e}`)==null?
         window.localStorage.setItem(`fetchData${e}`,await fetchMethod(true)+"\n"+await fetchMethod(true)):
         window.localStorage.setItem(`fetchData${e}`, 
         window.localStorage.getItem(`fetchData${e-1}`))
    )
       setstates(e=>e=window.localStorage?.getItem(`fetchData${10}`))
           console.log("%c"+values+"online","color:blue")
}
  else{
    if(values<10){
        setvalues(values+1)
        setstates(e=>e=window.localStorage.getItem(`fetchData${values}`))
    }
    else{
            setvalues(e=>e=1)      
      setstates(e=>e=window.localStorage.getItem(`fetchData10`))
    }
      window.localStorage.setItem(`fetchData${22}`,values);
    }
        console.log("%c"+values+"localOffline","color:red")
    }
  }