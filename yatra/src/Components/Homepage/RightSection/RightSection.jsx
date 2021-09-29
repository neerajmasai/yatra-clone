import React from "react";
import styled from "styled-components";
import { ImageSection } from "./ImageSection";
import { ImageSection2 } from "./ImageSection2";
import { PopularFlightRoutes } from "./PopularFlightRoutes";
import { RecentSearch } from "./RecentSearch";

const RightContainer = styled.div`
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FDFAFA;
    width: 55%;
    padding: 20px;

    @media all and (max-width: 1000px) {
        width: 100%;
    }
`;


function RightSection() {

    return (
        <RightContainer>
            <ImageSection />
            <RecentSearch />
            <PopularFlightRoutes routeType="domestic" />
            <PopularFlightRoutes routeType="international" />
            <ImageSection2 />
        </RightContainer>
    );
}

export { RightSection };