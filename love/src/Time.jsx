let Time=()=>{
    window.onmouseover=(e)=>{
    e.target==hill_fingers?
    hill_fingers.disabled=true:
    hill_fingers.disabled=false
  }
    fingers.innerHTML="Stop Watch => 0:0:0"
    setInterval(() => {
        
    }, 1000);
    return(
        <>
            <details>
                <summary></summary>      
                <button id="button"></button>
                <button id="hill_fingers" onClick={stopWatch} ></button>
            </details>
            <br />
            <br />
        </>
    )
}
export default Time