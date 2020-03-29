import React from 'react';

import './grid.styles.scss';

import { FaWindowClose } from 'react-icons/fa';

import { connect } from 'react-redux';

import { changeClicked } from '../../redux/projects/projects.actions';

const Grid = ({ project, changeClicked }) => {
	let { name, image, tags, clicked, id, description, github } = project;

	const modalStyles = {
		opacity: `${clicked ? '1' : '0'}`,
		transition: 'all .5s',
		top: `${clicked ? '50%' : '-50%'}`,
		zIndex: 1000
	};

	const logoID = (id) => {
		if (id === 0) {
			return `url(${image.Logo})`;
		} else if (id === 1) {
			return `url(${image.Logo1})`;
		} else if (id === 2) {
			return `url(${image.Logo2})`;
		}
	};

	const imageID = (id) => {
		if (id === 0) {
			return image.Logo;
		}
		if (id === 1) {
			return image.Logo1;
		} else if (id === 2) {
			return image.Logo2;
		}
	};

	return (
		<div
			style={{
				backgroundImage: logoID(id)
			}}
			className="grid"
		>
			<button className="button-view" onClick={() => changeClicked(id)}>
				VIEW PROJECT
			</button>
			<div className="container" style={modalStyles}>
				<div className="image-container">
					<img src={imageID(id)} alt="logo of the project" />
				</div>
				<div className="project-details">
					<FaWindowClose onClick={() => changeClicked(id)} />
					<h4>{name}</h4>
					<div className="tags">{tags.map((tag, id) => <span key={id}>{tag}</span>)}</div>
					<span>ABOUT:</span>
					<p>{description}</p>
					<button>DEMO</button>
					<button>
						<a href={github} rel="noopener noreferrer" target="_blank">
							CODE
						</a>
					</button>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	// openModal: () => dispatch(showModal()),
	changeClicked: (id) => dispatch(changeClicked(id))
});

export default connect(null, mapDispatchToProps)(Grid);
