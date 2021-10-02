import { Route } from "react-router"
import App from "../App";
import { Booking } from "../Components/Booking-page/Booking";
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
            <Route path="/payment">
                <Payment />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
        </>
    );
}