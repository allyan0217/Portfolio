import './FooterStyles.css';
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';
import React from 'react';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-container'>
				<div className='left'>
					<div className='location'>
						<FaHome size={20} style={{ color: 'white', marginRight: '2rem' }} />
						<div>
							<p>123 Housing Society</p>
							<p>Pakistan</p>
						</div>
					</div>
					<div className='phone'>
						<h4>
							<FaPhone
								size={20}
								style={{ color: 'white', marginRight: '2rem' }}
							/>
							0300-1234567
						</h4>
					</div>
                    <div className='email'>
						<h4>
							<FaMailBulk
								size={20}
								style={{ color: 'white', marginRight: '2rem' }}
							/>
							example@gmail.com
						</h4>
					</div>
				</div>
				<div className='right'>
                    <h4>About the Company</h4>
                    <p>this is me Allyan Haider. CEO & Founder of MindYourOwnBusiness. I enjoy discussing about new Projects and design challenges.</p>
                    <div className='social'>
                        <FaFacebook size={30} style={{color:"white", marginRight:"1rem"}}/>
                        <FaTwitter size={30} style={{color:"white", marginRight:"1rem"}}/>
                        <FaLinkedin size={30} style={{color:"white", marginRight:"1rem"}}/>
                    </div>
                </div>
			</div>
		</div>
	);
};

export default Footer;
