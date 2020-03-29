import React from 'react';

import './social.styles.scss';

import { FaGithub, FaEnvelope, FaUserCircle } from 'react-icons/fa';

const Social = () => {
	return (
		<div className="social">
			<div className="social__container social__container-1">
				<a href="https://github.com/NokDawn" target="_blank" rel="noopener noreferrer">
					github <FaGithub />
				</a>
			</div>
			<div className="social__container social__container-2">
				<a href="mailto:nookdawn@gmail.com?Subject=Hi%20friend" target="_top">
					email <FaEnvelope />
				</a>
			</div>
			<div className="social__container social__container-3">
				resume <FaUserCircle />
			</div>
		</div>
	);
};

export default Social;
