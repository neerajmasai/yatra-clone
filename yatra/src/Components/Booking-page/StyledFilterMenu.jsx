import styled from "styled-components";
import { Slider } from '@mui/material';
import { FilterMenu } from "./FilterMenu";

function FilterMenuDiv() {
    return (
        <FilterMenu>
            <div className="allFilters">
                <div className="row-flex">
                    <div className="col-flex">
                        <div className="steps">
                            <div className="filterHeading">Stops</div>
                            <input type="checkbox" name="direct" value="1" />
                            <label for="direct"> Direct Flight</label> <br />
                            <input type="checkbox" name="indirect" value="0" />
                            <label for="indirect"> Stop Over Flight</label>
                        </div>
                  
                    </div>
                    <div className="col-flex">
                        <div className="priceRange">
                            <div className="filterHeading">Price Range</div>
                            <Slider
                                // size="large"
                                sizeSmall
                                defaultValue={5000}
                                aria-label="Default"
                                valueLabelDisplay="auto"
                                min={3000}
                                max={35000}
                                width={100}
                                sx={{
                                    color: "#F34F4F"
                                }}
                            />
                        </div>
                    </div>
                
                    <div className="col-flex">
                        <div className="filterAirlines">
                            <div className="filterHeading">Airlines:</div>
                            <input type="checkbox" name="airAsia" value="Air Asia" />
                            <label for="airAsia"> Air Asia</label> <br />
                            <input type="checkbox" name="airIndia" value="Air India" />
                            <label for="airIndia"> Air India</label> <br />
                            <input type="checkbox" name="goFirst" value="Go First" />
                            <label for="goFirst"> Go First</label> <br />
                            <input type="checkbox" name="indigo" value="Indigo" />
                            <label for="indigo"> Indigo</label> <br />
                            <input type="checkbox" name="spiceJet" value="Spice Jet" />
                            <label for="spiceJet"> Spice Jet</label> <br />
                            <input type="checkbox" name="vistara" value="Vistara" />
                            <label for="vistara"> Vistara</label> <br />
                        </div>
                    </div>
                </div>
            </div>
        </FilterMenu>
    );
}

export { FilterMenuDiv };