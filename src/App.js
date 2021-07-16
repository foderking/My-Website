import React from 'react'
import { Route, Switch, NavLink, Link } from 'react-router-dom'
import './index.css'
import Home from './components/Home'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import Apps from './components/Apps'
import InputField from './components/hooks/InputField'


const App = () => 
{
	const search = InputField('text', '')

	return (
		<div className="container" >
			<Navigation /> 

			<Switch>			
				<Route path='/apps'>
					<Apps />
				</Route>

				<Route path='/projects'>
					<h1>project directory</h1>
				</Route>

				<Route path='/'>
					<Home />
				</Route>
			</Switch>			

			<Footer />
		</div>
	)
}

export default App