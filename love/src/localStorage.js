    //// local store function
    fetchData=[9,8,7,6,5,4,3,2,1]
    StaticObjectDataOBJ_Notation={
            fetchData
    }    
    StaticObjectDataOBJ_Notation.fetchData.map(
        e=> e==1?
         window.localStorage.setItem(`fetchData${e}`,StaticObjectDataOBJ_Notation.t):
         window.localStorage.getItem(`fetchData${e}`)==null?
         window.localStorage.setItem(`fetchData${e}`,``):
         window.localStorage.setItem(`fetchData${e}`, 
         window.localStorage.getItem(`fetchData${e-1}`))
    )
    //window.localStorage.getItem(`fetchData${e}`)