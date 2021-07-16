import React from 'react'


const Button = (props) =>
{
	const defaultButtonClass = 'f6 link dim ba ph3 pv2 mb2 dib near-black'
	return (
		<button 
			className={props.class ? props.class : defaultButtonClass}>
			{props.text}
		</button>
	)
}

export default Button