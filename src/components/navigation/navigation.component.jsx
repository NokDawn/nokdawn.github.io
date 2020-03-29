import React from 'react';

import './navigation.styles.scss';

import { Link } from 'react-router-dom';

const Navigation = ({ navClicked, changeNav }) => {
	const myStyle = {
		top: `${navClicked ? '0' : '-150vh'}`,
		left: `${navClicked ? '0' : '100vw'}`,
		transition: 'all .85s'
	};

	return (
		<nav style={myStyle} className="navigation">
			<ul>
				<li>
					<Link to="/" onClick={changeNav}>
						Homepage
					</Link>
				</li>
				<li>
					<Link to="/projects" onClick={changeNav}>
						Projects
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
