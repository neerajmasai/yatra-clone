import styled from "styled-components";

const StyledLeftSection = styled.div`
    width: 45%;
    margin-top: 70px;
    background-color: white;
    height: 100vh;
    font-family: Rubik, sans-serif;

    @media all and (max-width: 1000px) {
        flex-direction: column;
        margin: 70px auto 20px auto;
        height: max-content;
    }
`;

export { StyledLeftSection };