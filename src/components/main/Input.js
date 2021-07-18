import React from 'react'

const Input = (props) => {
	const search = props.state

	return (
		<input 
			// onChange={search.main.onChange} 
			// value={search.main.value}
			// type={search.main.type} 
			{...search.main}

			// placeholder={props.inputPlaceholder} 
			// aria-label={props.inputLabel}
			// className={props.inputClass} 
			{...props}
		/>
	)
}

export default Input