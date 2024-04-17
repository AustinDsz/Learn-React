function ProfilePicture(){
    const imageUrl = './src/assets/godzilla.jpg';
    const handleClick = (e) => {
        // console.log("ouch!");
        e.target.style.display = "none";
    }
    return(
        <img onClick={(e)=>handleClick(e)} src={imageUrl}></img>
    )
}

export default ProfilePicture;