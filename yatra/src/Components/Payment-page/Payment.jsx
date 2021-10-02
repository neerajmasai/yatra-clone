import styles from "./Payment.module.css";
import PaymentIcon from "@material-ui/icons/Payment";
const Payment = () => {
  const arr = [
    {
      image:
        "https://secure.yatra.com/PaySwift/content/PaySwift/desktop/images/upi-1.png",
      label: "Keep UPI app open on your Mobile Phone",
    },
    {
      image:
        "https://secure.yatra.com/PaySwift/content/PaySwift/desktop/images/upi-2.png",
      label: "Enter VPA and click on Pay Now ",
    },
    {
      image:
        "https://secure.yatra.com/PaySwift/content/PaySwift/desktop/images/upi-3.png",
      label: "Yatra will send a payment Request on your UPI App",
    },
    {
      image:
        "https://secure.yatra.com/PaySwift/content/PaySwift/desktop/images/upi-4.png",
      label: "Enter MPIN on Your UPI app to authorize Payment",
    },
    {
      image:
        "https://secure.yatra.com/PaySwift/content/PaySwift/desktop/images/upi-5.png",
      label: "Congratulations Your Payment is done Now",
    },
  ];
  return (
    <div className={styles.MainContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.AppLogo}></div>
      </div>
      <div className={styles.PaymentHeading}>
        {" "}
        <PaymentIcon
          className={styles.PaymentIcon}
          style={{ fontSize: "40px", color: "blue" }}
        />
        <h2> Payment Methods</h2>
      </div>
      <div className={styles.MainBox}>
        <div className={styles.LeftBox}>
          <ul className={styles.PaymentMethods}>
            <li>UPI</li>

            <li>Credit Card</li>

            <li>Debit Card</li>

            <li>Net Banking</li>

            <li>Pay pal</li>

            <li>Amazon Pay</li>

            <li>Google Pay</li>

            <li>Phone Pe</li>

            <li>Paytm</li>

            <li>Pay with rewards</li>

            <li>EMI Options</li>

            <li>Mobile Wallet</li>

            <li>Pay later</li>

            <li>
                Gift Voucher
            </li>

            <li>ZESTMoney EMI </li>

          
          </ul>

          <div className={styles.RightBox}>
            <div>Payment with UPI</div>
            <br />
            <div className={styles.PaymentProcedures}>
              {arr.map((item) => {
                return (
                  <div className={styles.EachItemDiv}>
                    <img src={`${item.image}`} alt="img" />
                    <p>{item.label}</p>
                  </div>
                );
              })}
            </div>
            <div className={styles.inputBoxContainer}>
              <div>virtual Payment Adress</div>
              <input type="text" className={styles.inputBox} />
            </div>
            <br />
            <div className={styles.PriceAndButton} style={{}}>
              <div className={styles.PriceAmount}> &#8377; 5806</div>
              <button className={styles.PayButton}>Pay Now</button>
            </div>
          

          <div className={styles.PlaneText}>By clicking on Pay now You are agree to our <span className={styles.Terms}>Terms and Conditons</span>  , <span className={styles.Terms}>Privacy Policy</span> ,<span className={styles.Terms}> User Agreement</span> and  <span className={styles.Terms}>Covid-19 Guidelines</span> </div>
          </div>
        </div>

        <div className={styles.RightSide}></div>
      </div>
    </div>
  );
};
export { Payment };
