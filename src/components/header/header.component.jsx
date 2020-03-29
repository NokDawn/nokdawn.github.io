import React from 'react';

import './header.styles.scss';

import Logo from '../../assets/logo.png';

import { FaBars } from 'react-icons/fa';

import Navigation from '../navigation/navigation.component';

import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import { changeNav } from '../../redux/nav/nav.actions';
import { selectNavClicked } from '../../redux/nav/nav.selectors';

import { createStructuredSelector } from 'reselect';

const Header = ({ changeNav, navClicked, history }) => {
	return (
		<div className="header">
			<div className="logo-container">
				<img src={Logo} alt="logo" onClick={() => history.push('/')} />
			</div>
			<FaBars className="bars" onClick={changeNav} />
			<Navigation navClicked={navClicked} changeNav={changeNav} />
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	changeNav: () => dispatch(changeNav())
});

const mapStateToProps = createStructuredSelector({
	navClicked: selectNavClicked
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
