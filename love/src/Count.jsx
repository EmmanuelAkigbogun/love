import { useEffect, useState } from "react"
let love="love"
let Count=()=>{
  let [state,setState]= useState(0)
  useEffect(()=>{
    console.log(love);
  })
    return(
            <>
            <button 
                onClick={(e)=>{
                    setState(state+1)
                }
            }>
                {state}
            </button>
            </>
  )
}
export default Count