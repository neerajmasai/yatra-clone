import React from "react"
import styled from "styled-components";

const PropListContainer = styled.div`
    /* background-color: lightgreen; */
    width: 250px;
    display: flex;
    margin-top: 10px;
    accent-color: red;

    .codebox {
        color: #02CB66;
        border: 1px dashed #02CB66;
        width: fit-content;
        padding: 3px;
        margin-right: 10px;
    }
`;

function PromoList({ code, amount, description }) {

    return (
        <PropListContainer>
            <input
                type="radio"
                name="code"
            />
            <label for="code">
                <div style={{display: "flex", color: "#db9a00", fontWeight: "500", alignItems: "center"}}>
                    <div className="codebox">{code}</div>
                    Save ₹ {amount}
                </div>
                <div className="codeDesc">
                    {description}
                </div>
            </label>
        </PropListContainer>
    );
}

export { PromoList };