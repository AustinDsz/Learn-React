function Button(){
    const styles={
            backgroundColor: "hsl(200, 100%, 50%)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          
    }
    let clickEvent = (e) => {
            e.target.style.backgroundColor = "green";
            e.target.style.color = "yellow";

    }

    return(
        <button style={styles} onClick={(e)=>clickEvent(e)}>Click me</button>
    )
}

export default Button;