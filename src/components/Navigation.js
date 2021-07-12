import React from 'react'
import { generateRandomWord } from './filler/dummy'
import RandomNumGen from './functionality/random'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


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
		<nav>
			<ul>

				{
					navLinks.map( each => 
					<li key={RandomNumGen()}> 
						<NavLink to={ each === 'Home' ? '/' : `/${each.toLowerCase()}` } >
							{each}
						</NavLink>
					</li>
					)
				}

			</ul>
		</nav>	
	)
}


export default Navigation