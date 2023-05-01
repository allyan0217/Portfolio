import { Link } from 'react-router-dom';
import './AboutContentStyles.css';

import React from 'react';

const AboutContent = () => {
    const imgStack1 = "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
	const imgStack2 = "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80";

    return (
		<div className='about'>
			<div className='left'>
				<h1>Who Am I?</h1>
				<p>
					I am a MERN Stack developer. I create responsive secure websites for
					my clients.
				</p>
				<Link to='/contact'>
					<button className='btn'>CONTACT</button>
				</Link>
			</div>
			<div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src={imgStack1} className='img' alt='img stack'/>
                    </div>
                    <div className='img-stack bottom'>
                        <img src={imgStack2} className='img' alt='img stack'/>
                    </div>
                </div>
            </div>
		</div>
	);
};

export default AboutContent;
