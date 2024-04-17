import PropTypes from 'prop-types';

function Button(props){

    let count = 0;

    const handleClick = () => {
        if(count<3){
            count++;
            console.log(`${props.name} you clicked me ${count} time/s`);
        }
        else{
            console.log(`${props.name} stop clicking me`);
        }    
    
    };
    
    // const handleClick = () => console.log(`${props.name} , stop clicking me`)
    
    // let handleClick = (e) => {
    //     e.target.textContent = "ouch";
    // };

    return(
        <button onClick={(e) => handleClick(e)}>Click me </button>
    );

}

Button.propTypes = {
    name: PropTypes.string
}

export default Button;