import React from "react";
import styles from '../Css/Booking.module.css'


function Booking() {
  return (
    <>
      <div className={styles.main_box} style= {{width:"100%"}}>
        <div className="navbar" style={{width:"100%"}}></div>
        <div className="searchAgain" style={{width:"100%"}}>
        <div className='trailing-icon'>
            <img src="" alt="icon" />
        </div>
        <div className='from'>
        <label >From</label>
        <input type="text" name='originplace' placeholder='Mumbai(BOM)' />
        </div>
        <div className='rev-icon'>
            <img src="" alt="revIcon" />
        </div>
        <div className='to'>
        <label >To</label>
        <input type="text" name='destinationplace' placeholder='New Delhi(DEL)' />
        </div>
        <div className='Travelling-class'>
        <label >Traveller(s),Class</label>
        <input type="text" name='travelling-class' placeholder='1 Traveller Economy'/>
        </div>
        <div className='search-button'>
            <button className='button-search'>Search Again</button>
        </div>
        </div>

        <div className="filterOpt">
            <div className='ficon-text'>
                <img src="" alt="ficon" />
                <div className='text'>Filters</div>
            </div>
            <div className='stops'>
                <div className='s-num'>
                    <div>0</div>
                    <div>1</div>
                </div>
            </div>
            <div className='price'>
                <div>Price</div>
                <img src="" alt="dropdown" />
            </div>
            <div className='departTime'>
                <div>Depart Time</div>
                <img src="" alt="dropdown" />
            </div>
            <div className='airlines'>
                <div>Airlines</div>
                <img src="" alt="dropdown" />
            </div>
            <div className='aircraft'>
                <div>Aircraft</div>
                <img src="" alt="dropdown" />
            </div>
            <div className='moreFilter'>
                <div>More Filters</div>
                <img src="" alt="dropdown" />
            </div>
        </div>

        <div className="block">
          <div className="left-block">
            <div className="dates">
                {/* array.map */}
                <div className='sample-date'>
                    <div>Mon, 4 Oct</div>
                    <div><img src="" alt="rupee-symbol" />5,941</div>
                </div>
            </div>

            <div className="sortBy">
                <div>SortBy</div>
                <div className='dep-ari-dur'>
                    <div>Depart</div>
                    <div>Arrive</div>
                    <div>Duration</div>
                </div>
                <div className='pr-up'>
                <div>PRICE PER ADULT <img src="" alt="upArrow"/></div>
                </div>
            </div>
            {/* array.map */}
            <div className="flights">
                <div className='up-section'>
                    <div className='ic-fli-date'>
                        <div><img src="" alt="carrier-icon" /></div>
                        <div className='fli-date'>
                            <div>Air-Asia</div>
                            <div>27-01-2021</div>
                        </div>
                    </div>
                    <div className='dep-time-place'>
                        <div>16:40</div>
                        <div>Mumbai</div>
                    </div>
                        <div className='arrive-time-place'>
                            <div>00:45</div>
                            <div>New Delhi</div>
                        </div>
                        <div className='totalTime-stop'>
                            <div>8h 05m</div>
                            <div>1 stop</div>
                        </div>
                        <div className='price-fairBtn'>
                            <div><img src="" alt="rupee-icon"/>5,941</div>
                            <div><button className='view-fare'>View Fares</button></div>
                        </div>
                </div>
                <div className='down-section'>
                        <div>Flight Details <img src="" alt="dropdown" /></div>
                        <div><div>eCash</div><div><img src="" alt="rupee-icon" />250</div></div>
                </div>
            </div>
            <div className="right-block">
                {/* array.map */}
              <div className="offers">
                  <div>Today's Offers</div>
                  <div>
                      <div>YATHDF</div>
                  </div>
                  <div>Flat 10% OFF(upto Rs. 1000)</div>
                  <div>Copy Code</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Booking };
