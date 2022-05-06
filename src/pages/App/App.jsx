import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../../components/About/About';
import NavBar from '../../components/NavBar/NavBar';
import Skills from '../../components/Skills/Skills';

import './App.css';

const App = () => {
  	return (
		<main className='App'>
			<header>
				<NavBar />
			</header>
			<br /><br /><br />
			<body>
				<h1 className='align-ctr'>Hello! I'm Hannah!</h1>
				<About />
				<Skills />
			</body>
		</main>
  	);
}

export default App;
