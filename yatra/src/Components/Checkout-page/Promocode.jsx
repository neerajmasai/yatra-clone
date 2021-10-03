import React from "react";
import styled from "styled-components";
import { PromoList } from "./PromoList";

const validPromocodes = [
    {
        code: "AMZICICI",
        amount: "799",
        description: "Get Flat INR 799 OFF/Per Pax on using Amazon Pay ICICI Credit Card."
    },
    {
        code: "YTYES",
        amount: "799",
        description: "Flat Rs 799 per pax up to Rs 2400 on using Yes Bank Credit Card."
    },
    {
        code: "ZEROFEE",
        amount: "410",
        description: "Save Up to Rs. 3,600. Valid with all cards and wallets."
    }
];

const PromoDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    
    justify-content: center;
    height: max-content;
    /* margin-top: 70px; */
    width: min-content;
    padding: 15px;

    div {
        padding: 5px 0px;
    }
`;

function Promocode() {
    const [promoQuery, setPromoQuery] = React.useState("");
    // console.log(validPromocodes)
    return (
        <>
            <PromoDiv>
            <h3>Promocode</h3>
                <div>Select a Promo Code</div>
                <div>
                    <input
                        type="text"
                        placeholder="YOUR PROMO CODE"
                        value={promoQuery}
                    />
                    <button>Apply</button>
                </div>
                {validPromocodes.map((e) => {
                    // console.log(e);
                    return <PromoList key={e.code} code={e.code} amount={e.amount} description={e.description} />
                })}
            </PromoDiv>
        </>
    );
}

export { Promocode };