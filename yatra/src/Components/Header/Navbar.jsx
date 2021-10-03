import styles from "./Navbar.module.css";
import FlightIcon from "@material-ui/icons/Flight";
import HotelIcon from "@material-ui/icons/Hotel";
import HouseIcon from "@material-ui/icons/House";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import TrainOutlinedIcon from "@material-ui/icons/TrainOutlined";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Navbar = () => {
  const visibleIcons = [
    {
      id: 1,
      icon: <FlightIcon className={styles.Icons} />,
      label: "flighs"
    },
    {
      id: 2,
      icon: <HotelIcon className={styles.Icons} />,
      label: "Hotels"
    },
    {
      id: 3,
      icon: <HouseIcon className={styles.Icons} />,
      label: "Villas & Stays"
    },
    {
      id: 4,
      icon: <DirectionsBusIcon className={styles.Icons} />,
      label: "Bus"
    },
    {
      id: 5,
      icon: <LocalTaxiIcon className={styles.Icons} />,
      label: "Cab"
    },
    {
      id: 6,
      icon: <TrainOutlinedIcon className={styles.Icons} />,
      label: "Train"
    }
  ];

  // const hiddenIcons = [
  //   {
  //     icon: <DirectionsWalkOutlinedIcon className={styles.Icons} />,
  //     label: "Adventure"
  //   }
  // ];

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
            <div className={styles.MoreOption}>+More</div>
            <div className={styles.SubMenu1}>
              <div>
                {visibleIcons.map((item) => {
                  return (
                    <div key={item.id} className={styles.ListItems}>
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
                <div>
                  <AccountCircleOutlinedIcon />
                </div>
                <div>My Booking</div>
                <div>My Refund</div>
              </div>
              <div>
                <button>LogIn</button>
                <button>Sign Up</button>
              </div>
            </div>
          
          </div>
          <div>
            Support <ArrowDropDownIcon className={styles.ArrowDown} />
          </div>
          <div className={styles.OtherInformation}>Offer</div>
          <div className={styles.OtherInformation}>Yatra for Buses </div>
        </div>
      </div>
    </header>
  );
};
export { Navbar };
