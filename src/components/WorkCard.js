import { Link, NavLink } from 'react-router-dom';
import './WorkCardStyles.css';
import React from 'react';

const WorkCard = props => {
	return (
		<div className='project-card'>
			<img src={props.imgsrc} alt='game-img' />
			<h2 className='project-title'>{props.title}</h2>
			<div className='pro-details'>
				<p>{props.text}</p>
				<div className='pro-btns'>
					<NavLink to={props.view} className='btn'>
						View
					</NavLink>
					<NavLink to={props.source} target="_blank" className='btn'>
						Source
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default WorkCard;
