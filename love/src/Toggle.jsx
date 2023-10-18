import { useState } from "react";
export default function Toggle(){
        let[initial,setinitial]=useState(true);
    return(
        <>
        <section onClick={()=>{
            initial?setinitial(f=>f=false):setinitial(f=>f=true)
        }}>
            <button>Toogle button</button>
            <br />
            {initial?<a>offline Download</a>:<a>Use Downloaded</a>}
        </section>
        </>
    )
}