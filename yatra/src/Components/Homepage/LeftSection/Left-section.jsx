import React from "react";
import styles from './Css/Left-section.module.css'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import { DatePicker, TimePicker, DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import {YatraDatePicker} from "./../../Utility/YatraDatePicker";

function Leftsection (){
    const [selectedDate, handleDateChange] = React.useState(new Date());

    return (
        <>
        <div className={styles.leftSection} >
            <div className={styles.box}>
                <div className={styles.r1}>Book Flights, Hotels and Holiday Packages</div>
                <div className={styles.btn}>
                    <button>One Way</button>
                    <button>Round Trip</button>
                    <button>Multi-City</button>
                    <button>Charter</button>
                </div>
                <div className={styles.dbg}>
                    <div className={styles.dep}>
                    <div style={{fontSize:"14px",color:"#A19F9D"}} >Depart From</div>
                    <div style={{fontSize:"18px",fontWeight:"700"}}>Mumbai</div>
                    <input type= "text" placeholder="BOM"/>
                    </div>
                    <div className={styles.revBtn}>
                        <button><img width="13px" src="https://www.yatra.com/fresco/resources/toucan/dist/images/swipe.svg?17fd684eff42c5149d5fd6cfe4b0b38b" alt="rev-icon" /></button>
                    </div>
                    <div className={styles.goi}>
                    <div style={{fontSize:"14px",color:"#A19F9D"}}>Going To</div>
                    <div style={{fontSize:"18px",fontWeight:"700"}}>New Delhi</div>
                    <input type="text" placeholder="DEL"/>
                    </div>
                </div>
                <div className={styles.depRetDate}>
                    <div className={styles.depDate}>
                        <label style={{fontSize:"14px",color:"#A19F9D"}}>Departure Date</label>
                        {/* <div style={{fontSize:"18px",fontWeight:"700"}}>4 Oct' 21</div>
                        <label>Monday</label> */}
                        {/* <input type="date"/> */}
                        <YatraDatePicker />
                    </div>
                    <div className={styles.retDate} >
                        <div style={{fontSize:"14px",color:"#A19F9D"}}>  Return date</div>
                        <div className={styles.bookRound}>Book Round Trip to save extra</div>
                        {/* <input type="date"/> */}
                        <YatraDatePicker />
                    </div>
                </div>
                <div className={styles.trav}>
                        <label style={{color:"#A19F9D",fontSize:"13px"}}> Traveller(s), class</label>
                        <div className={styles.traIco}>
                            <div style={{fontSize:"15px",fontWeight:"700"}}>1 Traveller, Economy</div>
                            <div><img width="15px" src="https://cdn-icons-png.flaticon.com/512/130/130907.png" alt="dropdown" /></div>
                        </div>
                </div>
                <div className={styles.nonStop}>
                    <input style={{marginLeft:"16px"}} type="checkbox"/>Non Stop Services
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                
                <div className={styles.button}>
                    <button>Check for refund</button>
                    <button>Search Flights <ArrowForwardOutlinedIcon style={{width:"15px"}}/>
                    </button>
                    </div>              
            </div>
        </div>
        </>
    )
}

export {Leftsection}