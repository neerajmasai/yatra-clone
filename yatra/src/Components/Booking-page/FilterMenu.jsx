import styled from "styled-components";

const FilterMenu = styled.div`
    /* background-color: lime; */
    background-color: white;
    width: 100%;
    box-shadow: 0 2px 4px 0 rgb(131 131 131 / 50%);
    display: flex;
    justify-content: center;
    z-index: 2;
    position: absolute;
    accent-color: #F34F4F;

    .allFilters {
    /* background-color: khaki; */
    width: 1200px;
    min-height: 350px;
    }

    .filterHeading {
    font-size: 18px;
    color: #333;
    font-weight: 600;
    margin-bottom: 10px;
    }

    .col-flex {
    display: flex;
    flex-direction: column;
    /* background-color: lightgoldenrodyellow; */
    min-height: 200px;
    min-width: 200px;
    }

    .row-flex {
    display: flex;
    flex-direction: row;
    /* background-color: grey; */
    height: 100%;
    align-items: flex-start;
    justify-content: space-around;
    margin-top: 20px;
    }

    .filterAirlines input {
    margin-top: 15px;
    }
`;

export { FilterMenu };