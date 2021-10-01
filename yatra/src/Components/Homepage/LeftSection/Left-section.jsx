import React, { useState } from "react";
import styles from "./Css/Left-section.module.css";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { YatraDatePicker } from "./../../Utility/YatraDatePicker";
import { DateTime } from "luxon";
import axios from 'axios'

function Leftsection() {
  const [countAdult, setAdultCount] = useState(0);
  const [countChild, setChildCount] = useState(0);
  const [countInfant, setInfantCount] = useState(0);

  const handleDateChange = (date) => {
    date = new Date(date).toISOString();
    var any = DateTime.fromISO(date).toFormat("yyyy-mm-dd");
    setFlightBookingData({ ...flightBookingData, departureDate: any });
  };

  const initValue = {
    origin: "",
    originCode: "",
    destination: "",
    destinationCode: "",
    departureDate: "",
    travellers: {
      adults: 0,
      kids: 0,
      infants: 0,
    },
    travelClass: 2,
  };
  
  const [flightBookingData, setFlightBookingData] = useState(initValue);
  
  const handleFlightDataChange = (e) => {
      const { name, value } = e.target;
      setFlightBookingData({ ...flightBookingData, [name]: value });
      var config = {
        method: "get",
        url: `http://localhost:2345/places/search/${value}`,
        headers: {},
      };
  
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    };
   
  console.log(flightBookingData);

  return (
    <>
      <div className={styles.leftSection}>
        <div className={styles.box}>
          <div className={styles.r1}>
            Book Flights, Hotels and Holiday Packages
          </div>
          <div className={styles.btn}>
            <button>One Way</button>
            <button>Round Trip</button>
            <button>Multi-City</button>
            <button>Charter</button>
          </div>
          <div className={styles.dbg}>
            <div className={styles.dep}>
              <div style={{ fontSize: "14px", color: "#A19F9D" }}>
                Depart From
              </div>
              <div style={{ fontSize: "18px", fontWeight: "700" }}>Mumbai</div>
              <input
                name={"origin"}
                onChange={handleFlightDataChange}
                type="text"
                placeholder="BOM"
              />
            </div>
            <div className={styles.revBtn}>
              <button>
                <img
                  width="13px"
                  src="https://www.yatra.com/fresco/resources/toucan/dist/images/swipe.svg?17fd684eff42c5149d5fd6cfe4b0b38b"
                  alt="rev-icon"
                />
              </button>
            </div>
            <div className={styles.goi}>
              <div style={{ fontSize: "14px", color: "#A19F9D" }}>Going To</div>
              <div style={{ fontSize: "18px", fontWeight: "700" }}>
                New Delhi
              </div>
              <input
                name={"destination"}
                onChange={handleFlightDataChange}
                type="text"
                placeholder="DEL"
              />
            </div>
          </div>
          <div className={styles.depRetDate}>
            <div className={styles.depDate}>
              <label style={{ fontSize: "14px", color: "#A19F9D" }}>
                Departure Date
              </label>
              <YatraDatePicker handleDateChange={handleDateChange} />
            </div>
            <div className={styles.retDate}>
              <div style={{ fontSize: "14px", color: "#A19F9D" }}>
                {" "}
                Return date
              </div>
              <YatraDatePicker />
            </div>
          </div>
          <div className={styles.trav}>
            <label style={{ color: "#A19F9D", fontSize: "13px" }}>
              {" "}
              Traveller(s), class
            </label>
            <div className={styles.traIco}>
              <div style={{ fontSize: "15px", fontWeight: "700" }}>
                {countAdult + countChild + countInfant} Traveller, Economy
              </div>
              <div>
                <img
                  width="15px"
                  src="https://cdn-icons-png.flaticon.com/512/130/130907.png"
                  alt="dropdown"
                />
              </div>
            </div>
          </div>
          <div className={styles.aci}>
            <div className={styles.adult}>
              <div className={styles.aduPar}>
                <div className={styles.c}>Adult</div>
                <div className={styles.adult}>
                  <div
                    className={styles.boxCount}
                    onClick={() => {
                      setAdultCount(countAdult + 1);
                    }}
                  >
                    +
                  </div>

                  <div className={styles.boxCount}>{countAdult}</div>
                  <div
                    className={styles.boxCount}
                    onClick={() => setAdultCount(countAdult - 1)}
                  >
                    -
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.child}>
              <div className={styles.chiPar}>
                <div className={styles.c}>Child(2-12 Yrs.)</div>
                <div className={styles.child}>
                  <div
                    className={styles.boxCount}
                    onClick={() => setChildCount(countChild + 1)}
                  >
                    +
                  </div>
                  <div className={styles.boxCount}>{countChild}</div>
                  <div
                    className={styles.boxCount}
                    onClick={() => setChildCount(countChild - 1)}
                  >
                    -
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.infant}>
              <div className={styles.infPar}>
                <div className={styles.c}>Infant(Below 2)</div>
                <div className={styles.infant}>
                  <div
                    className={styles.boxCount}
                    onClick={() => setInfantCount(countInfant + 1)}
                  >
                    +
                  </div>
                  <div className={styles.boxCount}>{countInfant}</div>
                  <div
                    className={styles.boxCount}
                    onClick={() => setInfantCount(countInfant - 1)}
                  >
                    -
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.radio}>
            <input type="radio" value={"Economy"} />
            Economy
            <input type="radio" value={"Premium Economy"} />
            Premium Economy
            <input type="radio" value={"Buisness"} />
            Buisness
          </div>
          <div className={styles.nonStop}>
            <input
              style={{ marginLeft: "16px", marginRight: "5px" }}
              type="checkbox"
            />
            Non Stop Services
          </div>

          <div className={styles.button}>
            <button>Check for refund</button>
            <button>
              Search Flights{" "}
              <ArrowForwardOutlinedIcon style={{ width: "15px" }} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export { Leftsection };
