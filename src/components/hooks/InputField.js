import React from 'react'
import { useState } from 'react'

const InputField = (type, init) =>
{
	const [value, setValue] = useState(init)


	function onChange(event)
	{
		const val = event.target.value
		console.log(val)
		setValue(val)
	}

	function reset()
	{
		setValue('')
	}

	return {
		main: {
			type: type, 
			onChange: onChange,
			value: value
		},
		reset
	}
}

export default InputField