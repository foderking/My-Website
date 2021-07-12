import React from 'react'
import { generateRandomParagraph } from './dummy'


const DummyParagraph = (props) =>
{
	const paragraph = generateRandomParagraph(props.length)

	return <>{paragraph}</>
}

export default DummyParagraph