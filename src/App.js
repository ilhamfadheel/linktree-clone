
import './App.css';
import logo from './images/logo.png'
import {FacebookSquare, InstagramAlt} from '@styled-icons/boxicons-logos/'
import {Code} from '@styled-icons/entypo/'
import {ShoppingCart} from '@styled-icons/foundation/'
import {ShoppingBag} from '@styled-icons/material/'
import {WhatsappSquare} from '@styled-icons/boxicons-logos/'

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
                <ShoppingCart size='2em' color="lightblue"/>
                <a href="https://sorudeshop.com/">Website (Fast Order)</a>
              </div>
            </div>

            <div className="Link">
              <div className="Link-container">
              <WhatsappSquare size='2em' color='green'/>
                <a href="https://wa.me/628998140989">Whatsapp</a>
              </div>                
            </div>
              
            <div className="Link">
              <div className="Link-container">
                <ShoppingBag size='2em' color='darkorange'/>
                <a href="https://shopee.co.id/aldmond22">Shopee</a>
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
            <a target="_blank" rel="noopener noreferrer" data-testid="SocialIcon" href="https://github.com/ilhamfadheel/linktree-clone" aria-label="github" className="github social">
              <Code size='2em' color="black" className="Icon"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
