function FetchApi ({fetchMethod}){
    return(
        <>
        <textarea  id="typeit" cols="10" rows="3"></textarea>
        <br />
        <br />
        <section>
          <button onClick={fetchMethod}>Check words</button>
        </section>
        </>
    )
}
export default FetchApi

