import React from 'react'
import { generateRandomLine } from '../filler/dummy'
import DummySentence from '../filler/DummySentence'



const Footer = () =>
{
	return (
		<footer>
			<div>
				<DummySentence length={7} />
			</div>

			<div>
				<DummySentence length={9} />
			</div>
				<p>
					© {new Date().getFullYear()}{" "}
					<a href="#">Foderking</a>, {generateRandomLine(6)}
				</p>

		</footer>
	)

}


export default Footer