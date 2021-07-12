import React from 'react'
import { generateRandomParagraph } from './dummy'


const DummyParagraph = (props) =>
{
	const paragraph = generateRandomParagraph(props.length)

	return <p>{paragraph}</p>
}

export default DummyParagraph