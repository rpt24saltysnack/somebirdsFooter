import React, { useState } from 'react';
import ListItem from './ListItem.jsx';
import styles from '../styles/app.css';

function App() {
  const [email, setEmail] = useState('');
  const [signUpMessage, setSignUpMessage] = useState('Enter your email to stay in touch!')
  const HELP = ['1-888-963-8944', '1-814-251-9966 (Text)', 'help@somebirds.com', 'Returns/Exchanges', 'FAQ/Contact Us'];
  const SHOP = [`Men's Shoes`, `Women's Shoes`, `Men's Apparel`, `Women's Apparel`, 'Socks', 'Gift Cards', 'Download the Somebirds App'];
  const COMPANY = ['Our Stores', 'Our Story', 'Our Materials', 'Sustainability', 'Partnerships', 'Affiliates', 'Bulk Orders', 'Careers', 'Press', 'California Transparency Act'];

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSignUp = (e) => {
    if (email)
      setSignUpMessage(`Great! You're all set! Cheers!`);
  }

  return (
    <div className={styles.container}>
      <div className={styles.rowContainer}>
        <div className={styles.columnContainer50}>
          {signUpMessage}
          {signUpMessage === 'Enter your email to stay in touch!' && <div className={styles.emailForm}>
            <form>
              <input className={styles.emailField} type="email" onChange={handleEmailChange} value={email} />
            </form>
            <div className={styles.signUpButton} onClick={handleSignUp}>SIGN<br/>UP</div>
          </div>}
        </div>
      </div>
      <div className={styles.rowContainer}>
        <div className={styles.columnContainer25}>
          <div className={styles.colHeader}>
            HELP
          </div>
          { HELP.map(x => <ListItem text={x}/>) }
        </div>
        <div className={styles.columnContainer25}>
          <div className={styles.colHeader}>
            SHOP
          </div>
          { SHOP.map(x => <ListItem text={x}/>) }
        </div>
        <div className={styles.columnContainer50}>
          <div className={styles.colHeader}>
            COMPANY
          </div>
          { COMPANY.map(x => <ListItem text={x}/>) }
        </div>
      </div>
      <div className={styles.rowContainer}>
        <div className={styles.columnContainer25}>
          <div className={styles.colHeader2}>
            FOLLOW THE FLOCK
          </div>
          <div className={styles.item}>
            Exclusive offers, a heads up on new things, and sightings of Somebirds in the wild. Oh, we have cute sheep, too. #wearesomebirds
          </div>
          <div className={styles.subRowContainer}>
            <div>
              <img className={styles.socialMediaIcon} src="https://somebirds-static-assets.s3.us-east-2.amazonaws.com/assets/Instagram_Logo.svg"></img>
            </div>
            <div>
              <img className={styles.socialMediaIcon} src="https://somebirds-static-assets.s3.us-east-2.amazonaws.com/assets/Twitter_Logo.svg"></img>
            </div>
            <div>
              <img className={styles.socialMediaIcon} src="https://somebirds-static-assets.s3.us-east-2.amazonaws.com/assets/Facebook_Logo.svg"></img>
            </div>
            <div>
              <img className={styles.socialMediaIcon} src="https://somebirds-static-assets.s3.us-east-2.amazonaws.com/assets/Pinterest_Logo.svg"></img>
            </div>
          </div>
        </div>
        <div className={styles.columnContainer25}>
          <div className={styles.horizontalCenter}>
            <img className={styles.certBLogo} src="https://somebirds-static-assets.s3.us-east-2.amazonaws.com/assets/CertifiedBCorp_Logo.svg"></img>
          </div>
        </div>
        <div className={styles.columnContainer50}>
          <div className={styles.subRowContainer}>
            <div>
              <img className={styles.flagIcon} src="https://somebirds-static-assets.s3.us-east-2.amazonaws.com/assets/American_Flag.svg"></img>
            </div>
            <div>
              <img className={styles.flagIcon} src="https://somebirds-static-assets.s3.us-east-2.amazonaws.com/assets/NewZealand_Flag.svg"></img>
            </div>
            <div>
              <img className={styles.flagIcon} src="https://somebirds-static-assets.s3.us-east-2.amazonaws.com/assets/Australian_Flag.svg"></img>
            </div>
            <div>
              <img className={styles.flagIcon} src="https://somebirds-static-assets.s3.us-east-2.amazonaws.com/assets/Canadian_Flag.svg"></img>
            </div>
            <div>
              <img className={styles.flagIcon} src="https://somebirds-static-assets.s3.us-east-2.amazonaws.com/assets/UnitedKingdom_Flag.svg"></img>
            </div>
            <div>
              <img className={styles.flagIcon} src="https://somebirds-static-assets.s3.us-east-2.amazonaws.com/assets/Chinese_Flag.svg"></img>
            </div>
            <div>
              <img className={styles.flagIcon} src="https://somebirds-static-assets.s3.us-east-2.amazonaws.com/assets/EuropeanUnion_Flag.svg"></img>
            </div>
            <div>
              <img className={styles.flagIcon} src="https://somebirds-static-assets.s3.us-east-2.amazonaws.com/assets/Japanese_Flag.png"></img>
            </div>
            <div>
              <img className={styles.flagIcon} src="https://somebirds-static-assets.s3.us-east-2.amazonaws.com/assets/SouthKorean_Flag.png"></img>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rowContainer}>
        <div className={styles.footerText}>
          <div className={styles.item}>
            @ 2021 Somebirds, Inc. All Rights Reserved. <span className={styles.link}>Terms</span>, <span className={styles.link}>Privacy</span> & <span className={styles.link}>Accessibility</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;