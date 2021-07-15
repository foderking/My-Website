import React from 'react'

const InputComp = (props) =>
	<input
		id={props.id}
		type={props.type}
		value={props.value}
		onChange={props.onChange}
	/>

export default InputComp