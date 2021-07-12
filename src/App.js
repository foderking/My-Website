import React from 'react'
import './index.css'
import Home from './components/Home'
import Navigation from './components/Navigation'


const App = () => 
{
	return (
		<div className="container" >
			<Navigation /> 
			<Home />
		</div>
	)
}

export default App
