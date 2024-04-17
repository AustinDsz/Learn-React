import { useEffect, useState } from "react";



function Footer(){

    const [second, seconds] = useState(0);
    let x = new Date();

    useEffect(()=>{
        setTimeout(()=>{
            seconds(x.getSeconds());
        },1000);
    });

    return(
        <footer>
            <p>&copy;{second} Your Website name</p>
        </footer>
    );
}

export default Footer;