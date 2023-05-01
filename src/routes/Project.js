import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';

const Project = () => {
	const heading = 'PROJECTS';
	const text = 'Some of my recent works';

	return (
		<div>
			<Navbar />
			<HeroImg2 heading={heading} text={text} />
			<Work />
			<PricingCard />
			<Footer />
		</div>
	);
};

export default Project;
