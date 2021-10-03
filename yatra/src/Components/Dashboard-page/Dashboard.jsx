import { Navbar } from "../Header/Navbar";
import styles from "./Dashboard.module.css";
import HouseIcon from "@mui/icons-material/House";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import MoneyIcon from "@mui/icons-material/Money";
import PersonIcon from "@mui/icons-material/Person";
import CreateIcon from "@mui/icons-material/Create";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import {useContext} from 'react'
// import {FlightDataContext} from '../../Contexts/FlightDataContext'
const Dashboard = () => {
    // const {flightContextData, handleFlightContextDataChange} = useContext(FlightDataContext)
  
  const arr = [
    "ALL",
    "FLIGHTS",
    "HOTELS",
    "HOMESTAYS",
    "BUSES",
    "TRAINS",
    "ACTIVITIES",
    "HOLIDAYS",
    "MONUMENTS",
  ];

  return (
    <div>
      <div className={styles.MainContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.AppLogo}></div>
        </div>
        <Navbar />
        <div className={styles.PaymentHeading}>
          {" "}
          <p> Dashboard / My Bookings</p>
        </div>
        <div className={styles.MainBox}>
          <div className={styles.LeftBox}>
            <ul className={styles.PaymentMethods}>
              <li>
                <HouseIcon className={styles.IconResize} /> <div>DASHBOARD</div>{" "}
              </li>

              <li>
                <AirplanemodeActiveIcon className={styles.IconResize} />{" "}
                <div>ALL BOOKINGS</div>{" "}
              </li>

              <li>
                <BookmarksIcon className={styles.IconResize} />{" "}
                <div>MODIFY BOOKINGS</div>{" "}
              </li>

              <li>
                {" "}
                <AirplaneTicketIcon className={styles.IconResize} />{" "}
                <div>TICKET/VOUCHERS</div>
              </li>

              <li>
                <AttachMoneyIcon className={styles.IconResize} />{" "}
                <div>CLAIM REFUND</div>{" "}
              </li>

              <li>
                <PlaylistAddIcon className={styles.IconResize} />{" "}
                <div>FLIGHT REFUND STATUS</div>{" "}
              </li>

              <li>
                <MoneyIcon className={styles.IconResize} /> <div> ECASH</div>
              </li>

              <li>
                {" "}
                <PersonIcon className={styles.IconResize} />{" "}
                <div>YOUR PROFILE</div>
              </li>

              <li>
                {" "}
                <CreateIcon className={styles.IconResize} />{" "}
                <div>YOUR COMMUNICATION</div>
              </li>
            </ul>
            <div className={styles.RightBox}>
              <div className={styles.BookingList}>
                {arr.map((item) => {
                  return <div className={styles.BookingListItem}>{item}</div>;
                })}
              </div>
              {/* <br />
              <div className={styles.PaymentProcedures}>here to write</div>
              <div className={styles.inputBoxContainer}>
                <div>virtual Payment Adress</div>
                <br />
                <input type="text" className={styles.inputBox} />
              </div>
              <br />
              <div className={styles.PriceAndButton}>
                <div className={styles.PriceAmount}> &#8377; 5806</div>
                <button className={styles.PayButton}>Pay Now</button>
              </div> */}

              {/* <div className={styles.PlaneText}>
                By clicking on Pay now You are agree to our{" "}
                <span className={styles.Terms}>Terms and Conditons</span> ,{" "}
                <span className={styles.Terms}>Privacy Policy</span> ,
                <span className={styles.Terms}> User Agreement</span> and{" "}
                <span className={styles.Terms}>Covid-19 Guidelines</span>{" "}
              </div> */}
            </div>
          </div>

          <div className={styles.RightSide}>
            <div className={styles.DetailCard}>
              <ul>
                <li>
                  <div>
                    <AccountCircleIcon className={styles.ProfileIcon} />
                  </div>{" "}
                </li>
                <li>
                  <div>MR. SHARIQ ANSARI</div>
                </li>

                <li>
                  <div>Phone: +91-8761234567 </div>{" "}
                </li>
                <li>
                  <div>ansarisharique0003@gmail.com </div>{" "}
                </li>
              </ul>
            </div>
            <div>
              <img
                style={{ width: "90%", marginLeft: "-10%", marginTop: "10%" }}
                src="https://secure.yatra.com/manage-bookings/resources/images/claim-refund.jpg"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Dashboard };
