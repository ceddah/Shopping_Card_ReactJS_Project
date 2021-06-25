import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer-left">
                    <div className="info">
                        <div>
                            <LocationOnIcon className="icon" />
                            <p>Queen Street, Kuripuni 5810</p> 
                        </div>
                        <div>
                            <PhoneIcon className="icon" />
                            <p>0123456789</p> 
                        </div>
                        <div>
                            <EmailIcon className="icon" />
                            <p>info@23threads.com</p> 
                        </div>
                    </div>
                </div>
                <div className="footer-right">
                    <div>
                        <div className="work-hours">
                            <p>Mon - Fri 10am - 4:30pm</p>
                            <p>Sat 10am - 3pm</p>
                            <p>Sun CLOSED</p>
                        </div>
                        <a href="https://instagram.com/">
                            <InstagramIcon className="icon" />
                        </a>
                        <a href="https://twitter.com/">
                            <TwitterIcon className="icon" />
                        </a>
                    </div>
                </div>
            </div>
            <p className="made-by">@ceddah Github</p>
        </footer>
    )
}

export default Footer
