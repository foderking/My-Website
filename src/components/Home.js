import React from 'react'
import DummyParagraph from './filler/DummyParagraph'
import DummySentence from './filler/DummySentence'

const Home = () => 
{
	return (
		<div>
			<h1> 
				<DummySentence length={4}/> 
			</h1>

			<div> 
				<DummyParagraph length={2} /> 
			</div>
		</div>
	)
}


export default Home