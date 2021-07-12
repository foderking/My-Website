import React from 'react'
import './index.css'
import Home from './components/Home'
import Navigation from './components/Navigation'
import Footer from './components/Footer'


const App = () => 
{
	return (
		<div className="container" >
			<Navigation /> 
			<Home />
			<Footer />
		</div>
	)
}

export default App
