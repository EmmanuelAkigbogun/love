import { useRef, useState } from "react"
import { batteryChanged } from "./App"
let storedList=""
export let downloadListFile=""
export let fileBoolean=true;
export let timerNumber=3;
export let Files=({fetchMethod})=>{
    let [labelStyle,setlabelStyle]=useState({})
    let url;
    let anchorLink=useRef(null)
    let progressSec=useRef(null)
    return(
        <>
        <section className="love">
            <button 
                style={{position:"relative"}}
                >
                <a 
                    style={{position:"relative"}}
                    onClick={async()=>{
                        let num=Number(prompt("number of words"))
                        storedList=""
                        for (let i=1;i<num+1;i++){
                            
                            storedList+=await fetchMethod(true)+"\n"+await fetchMethod(true)+"&"
                            //progressSec
                            progressSec.current.style.width=""+(i/num)*100+"%"
                            
                        }
                            progressSec.current.style.width="0%"
                        let blob=new File([storedList],"love.txt")
                        url=URL.createObjectURL(blob)
                        anchorLink.current.href=url
                        anchorLink.current.click()
                    }}
                >
                    offline Download
                </a>
                <section
                     ref={progressSec}
                     className="blue"
                    style={{position:"absolute",top:"0%",left:"0%",width:"0%",height:"100%"}}
                
                ></section>
            </button>
    </section>
    <section className="love">
        <button>
            <a> 
                <label 
                    htmlFor="forlink"
                    onClick={
                        (e)=>{
                            fileBoolean?fileBoolean=false:fileBoolean=true;
                            fileBoolean?setlabelStyle(e=>e={}):setlabelStyle(e=>e={color:"white"})
                               fileBoolean&&e.preventDefault()
                               console.log(fileBoolean)
                        }
                    }
                    style={labelStyle}
                
                > 
                    {fileBoolean?"Use":"End Use"} Downloaded
                </label>
            </a>
            
        </button>
    </section>
    <a ref={anchorLink} href={url} download="love.txt"></a>
    <input 
        type="file"
        onInput={async(e)=>{
            let fileTarget=e.target.files[0]
            let getFileTarget=await fileTarget.text()
            let getFile=(await getFileTarget).slice(0,(await getFileTarget.length)-1)
            downloadListFile=getFile;
        }}
        style={{
            display:"none"
        }}
        id="forlink"
    />
     </>
        
    )
}