import React from 'react';
import './App.css';

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ProjectsPage from './pages/projects-page/projects-page.component';

import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/projects" component={ProjectsPage} />
				<Route path="/" component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;
