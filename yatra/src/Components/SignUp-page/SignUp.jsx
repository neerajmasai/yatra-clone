import React from "react";
import styled from "styled-components";
import { Navbar } from "../Header/Navbar";
import { SignUpLeft } from "./SignUpLeft";
import { SignUpRight } from "./SignUpRight";

const SignUpContainer = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: center;
    margin: auto;
    box-shadow: 0px 2px 4px 0px rgb(0 0 0 / 24%);
    background-color: white;
    border-radius: 5px;
    width: 680px;
    padding: 20px;
    margin: auto;

    @media all and (max-width: 720px) {
        flex-direction: column;
        height: max-content;
        width: 340px;


        div {
            margin: 0px auto 10px auto;
        }
    }
`;

function SignUp() {
    

    return (
        <div style={{backgroundColor: "#F5F4F4", height: "100%", marginTop: "-20px", padding: "20px"}}>
            <Navbar />
            <div style={{ marginTop: "90px", textAlign: "center" }}>
                <h2>Welcome to Yatra!</h2>
                <h4>Please Login/Register using your Email to continue</h4>
            </div>
            <SignUpContainer>
                <SignUpLeft />
                <SignUpRight />
            </SignUpContainer>
        </div>
    );
}

export { SignUp };