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

			<p> 
				<DummyParagraph length={1} /> 
			</p>
		</div>
	)
}


export default Home