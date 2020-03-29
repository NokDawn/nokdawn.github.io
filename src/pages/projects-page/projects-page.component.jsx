import React from 'react';

import './projects-page.styles.scss';

import Grid from '../../components/grid/grid.component';
import Social from '../../components/social/social.component';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectLists } from '../../redux/projects/projects.selectors';

const ProjectsPage = ({ projects }) => {
	return (
		<div className="projects-page">
			<h2>Portfolio</h2>
			<p>Here's the list of my recent projects</p>
			<div className="grids">
				{projects.map((project) => <Grid key={project.id} project={project} />).reverse()}
			</div>
			<Social />
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	projects: selectLists
});

export default connect(mapStateToProps)(ProjectsPage);
