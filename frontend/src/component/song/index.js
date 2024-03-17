const Song = (props) => {

    return (
      <div style={{ padding: "10px", flex: "0 0 225px", background: "blu"}}>
        <div style={{height: "200px"}}>

        <img  style={{ borderRadius: "10px"}} width="100%" height="100%" src={props.thumbnail} alt={props.song}/>
  
        </div>
        <h2 style={{fontWeight: "400", marginTop: "10px"}}>{props.song}</h2>
      </div>
    )
  }

  export default Song;