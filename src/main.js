import { requireDevTemplates }  from './js/main/devTemplates/requireDevTemplates.js';
import { requireLeftMenu }      from './js/main/leftMenu/requireLeftMenu.js';
// import { requireDevActivePage } from './js/main/devActivePage/requireDevActivePage.js';
import './scss/main.scss'; // !!!!????

import { createStore } from 'redux';
// import { Provider } from 'react-redux';

import mainReduser from './js/main/store/mainReduser.js';
import { setMassageFromServer } from './js/main/store/massageFromServer/action.js';
import { MASSAGE } from './js/initialMassageFromServer';

export const store = createStore( mainReduser );

store.dispatch( setMassageFromServer( MASSAGE ) );

requireDevTemplates();
requireLeftMenu();
// requireDevActivePage();























// import { Component } from 'react';
// import React  from 'react';
// import ReactDOM from "react-dom";

// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import mainReduser from './js/store/redusers.js';








// import VremContainer from './js/components/Vrem/VremContainer.js';



// export const store = createStore( mainReduser );



// class App extends Component {

// 	render(){
// 		return (
//             <Provider store = { store } >
// 				<VremContainer  />
// 			</Provider>

// 		);
// 	}
// };


// ReactDOM.render(
// 	<App />,
// 	document.getElementById('app')
// );

















