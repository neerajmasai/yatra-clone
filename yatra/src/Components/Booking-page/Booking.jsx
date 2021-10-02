import React, { useState } from "react";
import styles from "../Css/Booking.module.css";
import AirplaneTicketOutlinedIcon from "@mui/icons-material/AirplaneTicketOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import ArrowUpwardSharpIcon from "@mui/icons-material/ArrowUpwardSharp";
import {Navbar} from '../Header/Navbar'


function Booking() {
    const offers =[
        {
            offerCode :"faljd",
            flat:"Flat Rs. 799 OFF per Pax (up to Rs 2,400)"
        },
        {
            offerCode :"faljd",
            flat:"Flat Rs. 799 OFF per Pax (up to Rs 2,400)"
        },
        {
            offerCode :"faljd",
            flat:"Flat Rs. 799 OFF per Pax (up to Rs 2,400)"
        },
        {
            offerCode :"faljd",
            flat:"Flat Rs. 799 OFF per Pax (up to Rs 2,400)"
        },
        {
            offerCode :"faljd",
            flat:"Flat Rs. 799 OFF per Pax (up to Rs 2,400)"
        }
    ];
  const data = [
    {
      origin: "Mumbai",
      originCode: "BOM-sky",
      destination: "Pune",
      destinationCode: "PNQ-sky",
      airplane: {
        name: "IndiGo",
        logo: "https://res.cloudinary.com/wego/f_auto,fl_lossy,h_80,w_80,q_auto/v21012019/flights/airlines_square/6E.png",
      },
      nonstop: false,
      departure: {
        date: "2021-11-17",
        dateShort: "Wednesday, 17 November",
        time: "00:00",
      },
      arrival: "18:41",
      duration: {
        hours: 18,
        mins: 41,
      },
      travellers: {
        adults: 2,
        kids: 0,
        infants: 0,
      },
      travelClass: 2,
      pricePerHead: 2788,
      totalFare: 10036,
    },
    {
      origin: "Mumbai",
      originCode: "BOM-sky",
      destination: "Pune",
      destinationCode: "PNQ-sky",
      airplane: {
        name: "IndiGo",
        logo: "https://res.cloudinary.com/wego/f_auto,fl_lossy,h_80,w_80,q_auto/v21012019/flights/airlines_square/6E.png",
      },
      nonstop: false,
      departure: {
        date: "2021-12-10",
        dateShort: "Friday, 10 December",
        time: "00:00",
      },
      arrival: "04:36",
      duration: {
        hours: 4,
        mins: 36,
      },
      travellers: {
        adults: 2,
        kids: 0,
        infants: 0,
      },
      travelClass: 2,
      pricePerHead: 2872,
      totalFare: 10339,
    },
    {
      origin: "Mumbai",
      originCode: "BOM-sky",
      destination: "Pune",
      destinationCode: "PNQ-sky",
      airplane: {
        name: "IndiGo",
        logo: "https://res.cloudinary.com/wego/f_auto,fl_lossy,h_80,w_80,q_auto/v21012019/flights/airlines_square/6E.png",
      },
      nonstop: false,
      departure: {
        date: "2022-03-24",
        dateShort: "Thursday, 24 March",
        time: "00:00",
      },
      arrival: "11:27",
      duration: {
        hours: 11,
        mins: 27,
      },
      travellers: {
        adults: 2,
        kids: 0,
        infants: 0,
      },
      travelClass: 2,
      pricePerHead: 3219,
      totalFare: 11588,
    },
    {
      origin: "Mumbai",
      originCode: "BOM-sky",
      destination: "Pune",
      destinationCode: "PNQ-sky",
      airplane: {
        name: "GoAir",
        logo: "https://res.cloudinary.com/wego/f_auto,fl_lossy,h_80,w_80,q_auto/v21012019/flights/airlines_square/G8.png",
      },
      nonstop: false,
      departure: {
        date: "2022-01-24",
        dateShort: "Monday, 24 January",
        time: "00:00",
      },
      arrival: "19:03",
      duration: {
        hours: 19,
        mins: 3,
      },
      travellers: {
        adults: 2,
        kids: 0,
        infants: 0,
      },
      travelClass: 2,
      pricePerHead: 3273,
      totalFare: 11782,
    },
  ];
  const [vFair,setVFair] = useState(false)
  const handleVFair = ()=>{
      if(vFair){
          setVFair(false)
        }else{
            setVFair(true)
      }
  }

  return (
    <>
    <Navbar/>
      <div className={styles.main_box}>
        <div className={styles.searchAgain}>
          <div className={styles.search_block}>
            <div className={styles.sas}>
              <AirplaneTicketOutlinedIcon />
            </div>
            <div className={styles.sas}>
              <label>From</label>
              <input type="text" name="originplace" placeholder="Mumbai(BOM)" />
            </div>
            <div className={styles.sas}>
              <CompareArrowsOutlinedIcon />
            </div>
            <div className={styles.sas}>
              <label>To</label>
              <input
                type="text"
                name="destinationplace"
                placeholder="New Delhi(DEL)"
              />
            </div>
            <div className={styles.sas}>
              <label>Traveller(s),Class</label>
              <input
                type="text"
                name="travelling-class"
                placeholder="1 Traveller Economy"
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
            <div className={styles.filter}>
              <div>More Filters</div>
              <KeyboardArrowDownOutlinedIcon />
            </div>
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.left_block}>
            <div className={styles.dates}>
              {/* array.map */}
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
            </div>

            <div className={styles.sort}>
              <div>SortBy</div>
              <div className={styles.dad}>
                <div>Depart</div>
                <div>Arrive</div>
                <div>Duration</div>
              </div>
              <div className="pr-up">
                <div className={styles.filter}>
                  PRICE PER ADULT <div> < ArrowUpwardSharpIcon style={{height:"14px"}} /></div>
                </div>
              </div>
            </div>
            <div className={styles.flightmain}>
              {data.map((e) => (
                <div className={styles.flights}>
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
                        <div style={{fontWeight:"bold"}}>{e.airplane.name}</div>
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
                        {e.duration.hours} {e.duration.mins}m
                      </div>
                      <div>0 stop</div>
                    </div>
                    <div className={styles.icFlDate}>
                      <div style={{fontSize:"19px",fontWeight:"600"}}>
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
                        Total fair : {e.totalFare}
                </div>): <div></div>}
                </div>

              ))}
            </div>
          </div>
          <div className={styles.right_block}>
            {/* array.map */}
            <div className="offers">
              <div style={{fontWeight:"700",margin:"20px",textAlignLast:"center",position:'relative'}}>Today's Offers</div>

              { offers.map(e =>
              <div className={styles.repeatOffers}>
                <div className={styles.codeDiv}>{e.offerCode.toUpperCase()}</div>
              <div style={{fontSize:"12px"}}>{e.flat}</div>
              <div style={{color:"blue", fontSize:"14px"}}>Copy Code</div>
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
