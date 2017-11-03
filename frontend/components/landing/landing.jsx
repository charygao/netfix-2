import React from 'react';
import { Link } from 'react-router-dom';
import CategoryIndexContainer from '../videos/category_index_container';
import HeaderContainer from '../header/header_container';

class Landing extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    if (this.props.currentUser) {
      return (
        <div className="landing-background">
          <div className="landing">
            <HeaderContainer />
            <div className="blurb">
              <div className="background-heading"><h1 className="blurb-title">Netfix Original</h1>
                <div className="subtitle">Watch Bob Vila's 5 Tips on Pest Control:</div>
                <div className="synopsis">Who else but the classic Bob Vila would know the best Tips
                   for putting an end to the pesky critters within your home?
                </div>
              </div>
            </div>
            <CategoryIndexContainer />
          </div>
        </div>
      );
    } else {
      return (
        <div className="pre-login-background">
          <img className="temp-logo" src="https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/netfix.png" />
          <div className="join-info">
            <p className="whats-next">See what's next.</p>
            <p className="anytime">Watch Anywhere. Cancel Anytime.</p>
            <button className="join-button" ><Link to="/signup">Join Free For a Month</Link></button>
          </div>
          <button className="sign-in-button"><Link to="/login">Sign In</Link></button>
        </div>
        )
      }
    };
  }

export default Landing;
