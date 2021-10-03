import { useEffect,useState } from "react"
import { Redirect } from "react-router";

const ThankYou =()=>{
    const [redirect, setRedirect] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setRedirect(true);
        }, 2000);
    })
    if(redirect){
        return <Redirect to={`/dashboard`}/>
    }
    return <div style={{width:'80%',margin:'auto'}}>
        <div style={{background: "url('https://entrackr.com/wp-content/uploads/2019/03/85c2e810-7889-40f5-aa3e-d4a1b6841686-1200x600.jpg') no-repeat",height:"100vh",margin:'100px auto',}} >
     
    <h1 style={{position:'relative',top:"350px",left:'200px',fontFamily:'sans-serif',color:'white'}}>Your flight has been booked.....</h1>
    </div>
    </div> 
}
export {ThankYou}