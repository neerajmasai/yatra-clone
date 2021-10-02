import React from "react";
import styled from "styled-components";

const RightStyles = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    align-items: center;
    background-color: #FEF3D9;
    border-radius: 10px;
    width: 70%;

    .rightTitle {
        background-color: #FEEAB8;
        padding: 15px 0px;
        border-radius: 10px 10px 0px 0px;
        width: 100%;
    }


`;

const Benefits = styled.div`
    padding: 30px;
    /* background-color: brown; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* align-items: center; */
    text-align: left;
    margin: auto;
    height: 90%;

    div {
        margin: 5px 0;
        font-weight: 550;
    }
`;

const ShowBenefit = ({text}) => {
    console.log(text);
    return (
        <div>{text}</div>
    );
}

function SignInRight() {
    return (
        <RightStyles>
            <div className="rightTitle">Logged In/Registered users get MORE!</div>
            <Benefits>
                <ShowBenefit text="View/ Cancel/ Reschedule bookings" />
                <ShowBenefit text="Check booking history, manage cancellations and print eTickets" />
                <ShowBenefit text="Book faster with Pre-Filled Forms, saved Travellers and Saved Cards" />
                <ShowBenefit text="Use Yatra eCash to get discounts" />
                <ShowBenefit text="Transfer eCash to your Family/Friends" />
                <ShowBenefit text="Convert eCash to Shopping Coupons from Amazon, BookMyShow, etc." />
                <ShowBenefit text={`Do you have GST number? Additional Benefits of Free Meals, Low Cancellation Fee, Free Rescheduling for SME business customers`} />


            </Benefits>
            
        </RightStyles>
    );
}

export { SignInRight };