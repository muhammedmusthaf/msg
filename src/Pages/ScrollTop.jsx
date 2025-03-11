import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = ()=>{
    const loaction = useLocation();

    useEffect(()=>{
        window.scrollTo({top:0, behavior: "smooth"});
    },[loaction])
    
    return null;
}
export default ScrollTop