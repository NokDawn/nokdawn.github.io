import Logo from '../../assets/1.png';
import Logo1 from '../../assets/2.png';
import Logo2 from '../../assets/3.png';

const INITIAL_STATE = {
	lists: [
		{
			id: 0,
			name: 'My portfolio website',
			image: { Logo },
			tags: [ 'HTML 5', 'CSS 3', 'Javascript', 'React', 'Redux', 'React-Router', 'Reselect' ],
			description:
				'Simplified portfolio website, i tried to build this website as simple as possible, without any fluff or extra animations',
			clicked: false,
			github: 'https://github.com/NokDawn/portfolio_v1'
		},
		{
			id: 1,
			name: 'Pizzeria Chilli',
			image: { Logo1 },
			tags: [ 'React', 'Redux', 'Reselect', 'Redux Persist', 'Firestore' ],
			description:
				'A project for a pizzeria located near to Gdansk, where a client can choose a pizza from the range of different ones, pick the size of the meal and add it to the basket',
			clicked: false,
			github: 'https://github.com/NokDawn/Chilli'
		},
		{
			id: 2,
			name: 'Shoprrr Clothes Shop',
			image: { Logo2 },
			tags: [
				'React',
				'Redux',
				'Redux Saga',
				'Reselect',
				'Redux Persist',
				'Firebase',
				'Authentication',
				'Stripe'
			],
			description:
				'A shop where user can login and logout, items chosen by the customer are saved thanks to persistance, items data is stored on the firestore site',
			clicked: false,
			github: 'https://github.com/NokDawn/Clothesstore'
		}
	]
};

export const projectsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'CHANGE_CLICKED':
			return {
				...state,
				lists: state.lists.map(
					(project, i) => (i === action.payload ? { ...project, clicked: !project.clicked } : project)
				)
			};
		default:
			return state;
	}
};
