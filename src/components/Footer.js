import React from 'react'
import DummySentence from './filler/DummySentence'



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
		</footer>
	)

}


export default Footer