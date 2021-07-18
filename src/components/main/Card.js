import React from 'react'
import { generateRandomLine, generateRandomWord } from '../filler/dummy';
import fallback from '../functionality/fallback';

const Card = (props) => {
	const deflt = {
		width: 10,
		imgsource : 'https://via.placeholder.com/150',
		title : generateRandomWord(),
		description : generateRandomLine(7),
		text: 'Go',
		link: '#'
	}

	const style = {
		width: `${fallback(props.width, deflt.width)}rem`
	}

	return (
		<div className="card" style={style} >
			<img src={ fallback(props.imgsource, deflt.imgsource) } class="card-img-top" alt={props.altText} />

			<div class="card-body">
				<h5 class="card-title">{fallback(props.title, deflt.title)}</h5>
				<p class="card-text">{ fallback(props.description, deflt.description) }</p>
				<a href={fallback(props.link, deflt.link) } class="btn btn-primary">{ fallback(props.text, deflt.text)} </a>
			</div>
		</div>
	)
}

export default Card
