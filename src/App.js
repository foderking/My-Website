import React from 'react'
import './index.css'
import Home from './components/Home'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { Route, Switch, NavLink, Link } from 'react-router-dom'
import SearchBar from './components/SearchBar'


const App = () => 
{
	return (
		<div className="container" >
			<Navigation /> 
			<SearchBar 
				onChange={() => 4}
				handleSubmit={() => 4}
				buttonText='Find'
			/>

			<Switch>			
				<Route path='/apps'>
					<h1>app directory</h1>
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