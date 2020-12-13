
import './App.css';
import logo from './images/logo.png'
import {FacebookSquare, InstagramAlt, Instagram} from '@styled-icons/boxicons-logos/'
import {Code} from '@styled-icons/entypo/'

function App() {
  return (
    <div className="App">
      <div className="Content">
        <div className="App-header">
          <div className="Body" >
            <div className="Background-image"/>
            <div className="Profile">
              <div className="Profile-image">
                <img src={logo} alt="profile"></img>
              </div>
              <div className="Profile-username">
                <h1>So Rude Shop</h1>
              </div>
            </div>

            <div className="Link">
              <div className="Link-container">
                <a href="https://sorudeshop.com/">Website (Fast Order)</a>
              </div>
            </div>

            <div className="Link">
              <div className="Link-container">
                <a href="https://wa.me/628998140989">Whatsapp</a>
              </div>                
            </div>
              
            <div className="Link">
              <div className="Link-container">
                <a href="https://wa.me/628998140989">Shopee</a>
              </div>                
            </div>

            <div className="Socials">
              <div className="Social-links">
                <a target="_blank" rel="noopener noreferrer" data-testid="SocialIcon" href="https://www.facebook.com/Sorudeshop/" aria-label="facebook" className="facebook social">
                  <FacebookSquare size='2.8em' color="white" className="Icon"/>
                </a>
                <a target="_blank" rel="noopener noreferrer" data-testid="SocialIcon" href="https://www.instagram.com/sorudeshop/" aria-label="facebook" className="instagram social">
                  <InstagramAlt size='2.8em' color="white" className="Icon"/>
                </a>
              </div>
            </div>
          </div>
          <div className="GitHub">
            <a target="_blank" rel="noopener noreferrer" data-testid="SocialIcon" href="https://github.com/ilhamfadheel" aria-label="facebook" className="facebook social">
              <Code size='2em' color="black" className="Icon"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
