import React from 'react'
import { generateRandomWord } from './filler/dummy'

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
					<li> 
						<a href={ each === 'Home' ? '/' : `/${each.toLowerCase()}` } >
							{each}
						</a>
					</li>
					)
				}

			</ul>
		</nav>	
	)
}


export default Navigation