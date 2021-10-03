import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Heading = styled.div`
    background-image: linear-gradient(to right, #43264e,#ea2331);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0 0 0.7143rem 0;
    padding: 0;
    font-size: 30px;
    text-decoration: double;
    letter-spacing: -0.2px;
    text-align: left;
    display: inline-block;
    color: #333;
    font-weight: bold;
    margin-top: 20px;
`;

const TravellerDiv = styled.div`
    width: 720px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 18px;
    padding: 20px 30px;
    margin-right: 20px;

    a {
        text-decoration: none;
        color: inherit;
    }

    div {
        /* background-color: lightskyblue; */
        margin: 5px;
    }
    input {
        border: 1px solid #a3a3a3;
        color: #333;
        padding: .8rem;
        border-radius: 2px;
        margin: 5px;
    }

    .normalText {
        font-size: 16px;
    }

    .subheading {
        font-size: 20px;
        font-weight: bold;
    }

    .Proceed {
        background-color: #CE2D2D;
        width: fit-content;
        margin: auto;
        border: none;
        outline: none;
        padding: 15px 30px;
        color: white;
        font-size: 18px;
        min-width: 270px;
        padding: 14px 50px;
        border-radius: 2px;
    }
`;

const PassengerValues = () => {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("")
    console.log("Traveller name", firstName, lastName);
    return (
        <form>
            <div>
                Passenger 1:
                <input
                    type="text"
                    placeholder="FIRST NAME"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="LAST NAME"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
        </form>
    );
}

function TravellerDetails() {
    const [email, setEmail] = React.useState();
    const [contactNum, setContactNum] = React.useState("");

    const [allPassengers, setAllPassengers] = ([]);
    // const totalPassengers = 3;
    console.log("contactDetails", email, contactNum);

    return (
        <>
            <Heading>
                <div>Traveller Details</div>
            </Heading>
            <TravellerDiv>
                <div>
                    <div className="subheading">Contact Details</div>
                    <form>
                        <input
                            type="email"
                            placeholder="EMAIL ID"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Mobile Number"
                            value={contactNum}
                            onChange={e => setContactNum(e.target.value)}
                        />
                    </form>
                    <div className="normalText">Your booking details will be sent to this email address and mobile number.</div>
                </div>
                <div>
                    <div className="subheading">Traveller Information</div>
                    <div className="normalText">
                        <b>Important Note:</b> Please ensure that the names of the passengers on the travel documents is the same as on their government issued identity proof.
                    </div>
                    <PassengerValues />
                </div>
                <button className="Proceed">
                    <Link to="/payment">
                        Proceed To Payment
                    </Link>
                </button>
            </TravellerDiv>
        </>
    );
}

export { TravellerDetails };