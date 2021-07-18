import React from 'react'
import { generateRandomLine } from '../filler/dummy'

const Footer2 = () => 
{
	return (
		<footer class="text-muted py-5">
			<div class="container">
				<p class="float-end mb-1">
					<a href="#">Back to top</a>
				</p>
				{/* <p class="mb-1">Album example is &copy; Bootstrap, but please download and customize it for yourself!</p> */}
				<p>
					© {new Date().getFullYear()}{" "}
					<a href="#">Foderking</a>, {generateRandomLine(13)}
				</p>
				<p class="mb-0">{generateRandomLine(3)} <a href="/">Visit the homepage</a> or read our <a href="#">{generateRandomLine(3)} </a>.</p>
			</div>
		</footer>
	)
}

export default Footer2
