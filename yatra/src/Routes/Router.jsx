import { Route } from "react-router"
import App from "../App";
import { Booking } from "../Components/Booking-page/Booking";
import { SignIn } from "../Components/SignIn-page/SignIn";
import { SignUp } from "../Components/SignUp-page/SignUp";


export const Routes = ()=>{
    return (
        <>
            <Route exact path="/">
                <App />
            </Route>
            <Route path="/booking">
                <Booking />
            </Route>
            <Route path="/signup">
                <SignUp />
            </Route>
            <Route path='/signin'>
                <SignIn />
            </Route>
        </>
    );
}