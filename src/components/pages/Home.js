import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import header_img_12 from "../images/happy9.jpeg"
import header_img_15 from "../images/happy10.jpeg"
import header_img_16 from "../images/happy9.jpeg"
import header_img_17 from "../images/02.jpeg"

import Navbar from '../Navbar';
import Footer from './Footer';



const Home = () => {
  return (
    <div className='home'>
      {/* ============================ I took out the navigation bar ============ */}
      {/* <Navbar /> */}
      <div className='home_container'>
        <div className='home_login logs'>
          {/* <Link to="" className='logo_link'>LOGIN</Link> */}
          <div className='gen_logs'>
            <div>
              <Link to="/logIn" className='main_login'>Log In</Link>
            </div>
            <div>
              <Link to="/signUp" className='main_signi'>Sign Up</Link>
            </div>
          </div>

          <div class="title">
            <h1 className='signup-logo'>EPIC</h1>
            Where
            <span>SWINGERS</span>
            go to PLAY!
          </div>
          <div>
            <p>I am / We are a</p>
            <select>
              <option>Female</option>
              <option>Male</option>
              <option>Couples</option>
              <option>Groups</option>
              <option>TS/TV</option>
            </select>
          </div>
          <div className='gg'>

            <div className='select_area'>
              <div>Men</div>
              <div>Women</div>
              <div>Couples(Man/Woman)</div>
              <div>Groups</div>
              <div>TS/TV/TGs</div>
              {/* <div></div> */}
            </div>
          </div>

          <Link to="/" className='apply'>Apply now</Link>
        </div>

      </div>
      <div className='meet_container'>
        <h1 className='meet_text'>Ontmoet de heetste leden in <span>Provincie Noord-Holland</span>  </h1>
        <h4>31,925 Leden NU online!</h4>
      </div>
      <div className="home_hot">
        <div>
          < img src={header_img_12} alt="" />

        </div>
        <div className='hot_text'>
          <h1>'s Werelds heetste swingersite</h1>
          <p>
            Swapfinder.com is de plek waar sexy en avontuurlijke stellen elkaar treffen voor seks, vriendschap en om plezier te maken met gelijkgestemde mensen. Chat live met sexy singles en swingers met behulp van onze Instant Messenger Chat (IMC), wissel foto's en video's uit, en word intiem met twee richtingen webcam. Meld je nu gratis aan en zie hoe gemakkelijk het is om mensen te ontmoeten en contact te leggen op 's werelds heetste site voor parenruil!
          </p>
          <Link className='create-account' to="/signUp">Create a free account</Link>
        </div>
      </div>
      <div className="home_hot">
        <div className='hot_text'>
          <h1>Wat maakt Swapfinder anders?</h1>
          <p>
            Swapfinder.com heeft miljoenen leden wereldwijd, dus je vindt altijd iemand bij jou in de buurt die op zoek is naar hetzelfde als jij. We bieden ook een heleboel geweldige functies die zijn ontworpen om je te helpen elkaar beter te leren kennen voordat je in het echt met iemand afspreekt
          </p>
          <ul>
            <li>Bekijk gedetailleerde ledenprofielen</li>
            <li>Vind swingers bij jou in de buurt</li>
            <li>Geniet van sekschats via Instant Messenger of tweerichtingen webcam</li>
            <li>Bekijk duizenden naaktfoto's en -video's van leden</li>
            <li>Maak deel uit van een internationale pro-seks gemeenschap van swingers</li>
          </ul>
          <Link className='create-account' to="/signUp"> CREER A GRATIS PROFILE</Link>
        </div>
        <div>< img src={header_img_15} alt="" /> </div>

      </div>
      <Footer />
    </div>
  )
}

export default Home