
export let fetchFunction=async(variable)=>{
        
        let cssconsolelog=""
        try{
         let ss=fetch("https://random-word-api.vercel.app/api?words=1")
        let e =(await ss).json()
        let ds= (await e)
        console.log(ds.join())
        ss = fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+ds.join())
        e= (await ss).json()
        let k= await e    
        // <a id="anc" download="lovea">anchor</a>
        //  let  blob=URL.createObjectURL(k)
       // anc.href=blob
        //anc.click()
        if(variable){
        k.length==undefined? cssconsolelog=k.message+" Star "+ds:
        cssconsolelog=k[0].meanings[0]
          .definitions[0]
          .definition.replaceAll(")","")
          .replaceAll("(","")+" Star "+ds
        }
        else{
          cssconsolelog=k;
        }
        }
        catch(e){
        }
        console.log(cssconsolelog)
        return variable? cssconsolelog :JSON.stringify(cssconsolelog[0])
       // navigator.clipboard.writeText(k.join(" ")) <FetchApi fetchMethod={fetchFunction}/>
}
