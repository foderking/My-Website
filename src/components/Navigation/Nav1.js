import React from 'react'
import { generateRandomWord } from 'Components/filler/dummy'
import RandomNumGen from 'Components/functionality/random'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import SearchBar from 'Components/SearchBar'


const Navigation = () =>
{
	const link1 = generateRandomWord()
	const link2 = generateRandomWord()
	const link3 = generateRandomWord()

	const navLinks = [
		'Home',
		'Apps',
		'Projects',
		link1,
		link2,
		link3
	]


	return (
		<nav id='navbar' className='navbar navbar-expand-lg navbar-light bg-light'>
			<div className='container-fluid' >

				<HomeLink link='#' text='Foderking' />


				<NavbarToggler />
				<NavbarCollapse navLinks={navLinks}/>
				
				<SearchBar 
					formClass='d-flex' 

					inputType='search' 
					inputClass='form-control me-2'
					inputPlaceholder='Search'
					inputLabel='Search'

					buttonClass="btn btn-outline-success"
					buttonType='submit'
					buttonText='search'
				/>

			</div>
		</nav>	
	)
}

const HomeLink = (props) =>
	<a className="navbar-brand" href={props.link}>
		{props.text}
	</a>


const NavbarToggler = () => 
	<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"></span>
	</button>

const NavbarCollapse = (props) => 
<div className="collapse navbar-collapse" id="navbarSupportedContent">
	<ul className='navbar-nav me-auto mb-2 mb-lg-0'>

		{
			props.navLinks.map( each => 
			<li key={RandomNumGen()} className='nav-item'> 
				<NavLink className='nav-link' to={ each === 'Home' ? '/' : `/${each.toLowerCase()}` } replace >
					{each}
				</NavLink>
			</li>
			)
		}

	</ul>
</div>




export default Navigation