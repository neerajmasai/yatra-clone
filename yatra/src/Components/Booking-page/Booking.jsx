import React, { useContext, useState } from "react";
import styles from "../Css/Booking.module.css";
import AirplaneTicketOutlinedIcon from "@mui/icons-material/AirplaneTicketOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import ArrowUpwardSharpIcon from "@mui/icons-material/ArrowUpwardSharp";
import {Navbar} from '../Header/Navbar'
import {FlightDataContext} from '../../Contexts/FlightDataContext'
import {Redirect} from "react-router-dom";
import {v4 as uuid} from 'uuid'
import { AuthContext } from "../../Contexts/AuthContext";
import { FilterMenuDiv } from "./FilterMenu";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

function Booking() {
    const {flightContextData,flightDetails, handleFlightDetails} = useContext(FlightDataContext)
    console.log(flightContextData)
    const [redirectToBookings, setRedirectToBookings] = useState(false);
    
    const {token} = useContext(AuthContext)

    const [showFilters, setShowFilters] = useState(false)
    const offers = [
        {
            offerCode :"faljd",
            flat:"Flat Rs. 799 OFF per Pax (up to Rs 2,400)"
        },
        {
            offerCode :"akdjd",
            flat:"Flat Rs. 399 OFF per Pax (up to Rs 1,400)"
        },
        {
            offerCode :"afjlf",
            flat:"Flat Rs. 999 OFF per Pax (up to Rs 3,400)"
        },
        {
            offerCode :"yafaj",
            flat:"Flat Rs. 229 OFF per Pax (up to Rs 1,00)"
        },
        {
            offerCode :"adkdj",
            flat:"Flat Rs. 899 OFF per Pax (up to Rs 1,100)"
        }
    ];

  const data = flightContextData;

  const [vFair,setVFair] = useState(false)

  const handleVFair = ()=>{
      if(vFair){
          setVFair(false)
        }else{
            setVFair(true)
      }
  }


  const handleBook = (flightData)=>{
    
    handleFlightDetails(flightData)
    setRedirectToBookings(true)
      // if(token !== ""){
      // } else {
      //   return <Redirect to={`/login`}/>
      // }
  }
  if(redirectToBookings){
    return <Redirect to={`/checkout`}/>
  }

  return (
    <>
      <Navbar />
      <div className={styles.main_box}>
        <div className={styles.searchAgain}>
          <div className={styles.search_block}>
            <div className={styles.sas}>
              <AirplaneTicketOutlinedIcon style={{ height: "30px", width: "40px" }} />
            </div>
            <div className={styles.sas}>
              <label>From</label>
              <input type="text" name="originplace" placeholder={data[0].origin.toUpperCase()} />
            </div>
            <div className={styles.sas}>
              <CompareArrowsOutlinedIcon />
            </div>
            <div className={styles.sas}>
              <label>To</label>
              <input
                type="text"
                name="destinationplace"
                placeholder={data[0].destination.toUpperCase()}
              />
            </div>
            <div className={styles.sas}>
              <label>Traveller(s),Class</label>
              <input
                type="text"
                name="travelling-class"
                placeholder= {`${data[0].travellers.adults +data[0].travellers.infants + data[0].travellers.kids } Traveller Economy`}
              />
            </div>
            <div className={styles.sas}>
              <button className={styles.btn}>Search Again</button>
            </div>
          </div>
        </div>
        <div className={styles.filterDiv}>
          <div className={styles.filterOpt}>
            <div className="ficon-text">
              <FilterAltOutlinedIcon />
              <div className="text">Filters</div>
            </div>
            <div className={styles.filter}>
              <div>Stops:</div>
              <div className={styles.smallBox}>0</div>
              <div className={styles.smallBox}>1</div>
            </div>
            <div className={styles.filter}>
              <div>Price</div>
              <KeyboardArrowDownOutlinedIcon />
            </div>
            <div className={styles.filter}>
              <div>Depart Time</div>
              <KeyboardArrowDownOutlinedIcon />
            </div>
            <div className={styles.filter}>
              <div>Airlines</div>
              <KeyboardArrowDownOutlinedIcon />
            </div>
            <div className={styles.filter}>
              <div>Aircraft</div>
              <KeyboardArrowDownOutlinedIcon />
            </div>
            <div className={styles.filter} style={{color: "#3691ca"}} onClick={() => setShowFilters(!showFilters)}>
              {/* <div style={{ color: "#3691ca" }}> */}
                {!showFilters
                  ? <>More Filters <KeyboardArrowDownOutlinedIcon /></>
                  : <>Hide Filters <KeyboardArrowUpOutlinedIcon /></>
                }
              {/* </div> */}
              
            </div>
          </div>
        </div>

        {showFilters
          ? <div className="additionalFilters">
            <FilterMenuDiv />
          </div>
          : null
        }
        <div className={styles.block}>
          <div className={styles.left_block}>
            {/* <div className={styles.dates}>
              <div className={styles.sas}>
                <div>{data[0].departure.dateShort}</div>
                <div>
                  <img
                    width="13px"
                    src="https://cdn-icons-png.flaticon.com/512/3104/3104891.png"
                    alt="rupee-symbol"
                  />
                  {data[0].pricePerHead}
                </div>
              </div>
            </div> */}

            <div className={styles.sort}>
              <div>SortBy</div>
              <div className={styles.dad}>
                <div>Depart</div>
                <div>Arrive</div>
                <div>Duration</div>
              </div>
              <div className="pr-up">
                <div className={styles.filter}>
                  PRICE PER ADULT <div> < ArrowUpwardSharpIcon style={{ height: "14px" }} /></div>
                </div>
              </div>
            </div>
            <div className={styles.flightmain}>
              {data.map((e) => (
                <div key={uuid()} className={styles.flights}>
                  <div className={styles.up_section}>
                    <div className={styles.icFlDate}>
                      <div>
                        <img
                          width="20px"
                          src={e.airplane.logo}
                          alt="carrier-icon"
                        />
                      </div>
                      <div className={styles.fliDate}>
                        <div style={{ fontWeight: "bold" }}>{e.airplane.name}</div>
                      </div>
                    </div>
                    <div className={styles.fliDate}>
                      <div className={styles.time}>{e.departure.time}</div>
                      <div>{e.origin}</div>
                    </div>
                    <div className={styles.fliDate}>
                      <div className={styles.time}>{e.arrival}</div>
                      <div>{e.destination}</div>
                    </div>
                    <div className={styles.fliDate}>
                      <div className={styles.time}>
                        {e.duration.hours}h {e.duration.mins}m
                      </div>
                      <div>{e.nonstop ? "0 Stop" : "1 Stop"}</div>
                    </div>
                    <div className={styles.icFlDate}>
                      <div style={{ fontSize: "19px", fontWeight: "600" }}>
                        <img
                          width="15px"
                          src="https://cdn-icons-png.flaticon.com/512/3104/3104891.png"
                          alt="rupee-icon"
                        />
                        {e.pricePerHead}
                      </div>
                      <div>
                        <button onClick={handleVFair} className={styles.vbtn}>View Fares</button>
                      </div>
                    </div>
                  </div>
                  {vFair ? ( <div className={styles.viewFair}>
                        Total fair : {e.totalFare} <button onClick={()=>{
                          handleBook(e)
                          }}>Book</button>
                </div>): <div></div>}
                </div>

              ))}
            </div>
          </div>
          <div className={styles.right_block}>
            {/* array.map */}
            <div className="offers">
              <div style={{ fontWeight: "700", margin: "20px", textAlignLast: "center", position: 'relative' }}>Today's Offers</div>

              {offers.map(e =>
                <div className={styles.repeatOffers}>
                  <div className={styles.codeDiv}>{e.offerCode.toUpperCase()}</div>
                  <div style={{ fontSize: "12px" }}>{e.flat}</div>
                  <div style={{ color: "#3691ca", fontSize: "14px" }}>Copy Code</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Booking };
