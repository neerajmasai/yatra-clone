import styles from "./Navbar.module.css";
import FlightIcon from "@material-ui/icons/Flight";
import HotelIcon from "@material-ui/icons/Hotel";
import HouseIcon from "@material-ui/icons/House";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import TrainOutlinedIcon from "@material-ui/icons/TrainOutlined";
import DirectionsWalkOutlinedIcon from "@material-ui/icons/DirectionsWalkOutlined";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
const Navbar = () => {
  const visibleIcons = [
    { icon: <FlightIcon className={styles.Icons} />, label: "flighs" },
    { icon: <HotelIcon className={styles.Icons} />, label: "Hotels" },
    {
      icon: <HouseIcon className={styles.Icons} />,
      label: "Villas&Stays",
    },
    { icon: <DirectionsBusIcon className={styles.Icons} />, label: "Bus" },
    {
      icon: <LocalTaxiIcon className={styles.Icons} />,
      label: "Cab",
    },
    {
      icon: <TrainOutlinedIcon className={styles.Icons} />,
      label: "Train",
    },
  ];
  const hiddenIcons = [
    {
      icon: <DirectionsWalkOutlinedIcon className={styles.Icons} />,
      label: "Adventure",
    },
  ];
  return (
    <header className={styles.MainHeader}>
      <div className={styles.header}>
        <div className={styles.AppLogo}></div>
        <div className={styles.IconsAndTextWraper}>
          {visibleIcons.map((item) => {
            return (
              <div className={styles.IconsAndText}>
                <div className={styles.Icons}>{item.icon}</div>
                <div className={styles.Text}>{item.label}</div>
              </div>
            );
          })}
          <div className={styles.MoreIconsAndText}>
            +More
            <div className={styles.SubMenu1}>
              <div>
                {visibleIcons.map((item) => {
                  return (
                    <div className={styles.ListItems}>
                      <div>{item.icon}</div>
                      <div className={styles.Labels}>{item.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          </div>
          <div className={styles.OtherInformationWrapper}>
            <div className={styles.myAccountWrapper}>
              My Account
              <ArrowDropDownIcon className={styles.ArrowDown} />
              <div className={styles.AccountInfo}>
                  <div className={styles.ImageBookingAndRefund}>
                    <div ><AccountCircleOutlinedIcon/></div>
                    <div>
                      My Booking
                    </div>
                    <div>My Refund</div>
                  </div>
                  <div>
                    <button>LogIn</button>
                    <button>Sign Up</button>

                  </div>
                 
              </div>
            </div>
            <div >
              Support <ArrowDropDownIcon className={styles.ArrowDown} />
            </div>
            <div className={styles.OtherInformation}>
              Offer
            </div>
            <div className={styles.OtherInformation}>Yatra for Buses </div>
         
        </div>
      </div>
    </header>
  );
};
export { Navbar };
