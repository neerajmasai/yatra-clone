import { Route } from "react-router"
import App from "../App";
import { Booking } from "../Components/Booking-page/Booking";
import { SignIn } from "../Components/SignIn-page/SignIn";
import { SignUp } from "../Components/SignUp-page/SignUp";
import { Payment } from "../Components/Payment-page/Payment";
import {Dashboard} from "../Components/Dashboard-page/Dashboard";
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
<<<<<<< HEAD
            <Route path="/payment">
                <Payment />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
=======
            <Route path='/signin'>
                <SignIn />
>>>>>>> 900ce9d0e9f7ee501127fc3c4345aa5cb531c438
            </Route>
        </>
    );
}