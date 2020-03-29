import React from 'react';

import './homepage.styles.scss';

import Social from '../../components/social/social.component';

import { withRouter } from 'react-router-dom';

const HomePage = ({ history }) => {
	return (
		<div className="homepage">
			<div className="homepage__main">
				<h1>
					<span>Hi, It's </span>
					<span>Mateusz Wojtas</span>
				</h1>
				<h2>I'm a web developer currently living in Gdansk, Poland</h2>
				<span>Contact me if you want to do something special</span>
				<button onClick={() => history.push('/projects')}>See my Projects</button>
			</div>
			<Social />
		</div>
	);
};

export default withRouter(HomePage);
