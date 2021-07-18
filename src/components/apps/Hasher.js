import React from 'react'
import { useState } from 'react'
import InputField from '../hooks/InputField'
import Button from '../main/Button'
import Input from '../main/Input'
import { algos, hashFunc } from '../functionality/hash'
import DropDown from '../DropDown'




const Hasher = () => {
	const text = InputField('text', '')
	const [hash, setHash] = useState('')
	const dropdown = InputField('select', 'SHA-1')

	function onSubmit(event)
	{
		event.preventDefault()
		hashFunc(text.main.value, dropdown.main.value, setHash)
	}
		
	return (
		<div id='hasher'>
			<form onSubmit={onSubmit}>
				<div>
					<label>Enter text</label>	
					<Input
						state={text}
						placeholder={'Type in text to hash'} 
						// aria-label={props.inputLabel}
						// className={props.inputClass} 
					/>
					<DropDown 
						{...dropdown.main}
						parameters={algos}
					/>
				</div>

				<Button type='submit' text='Go'/>
			</form>
			{dropdown.main.value} hash is: {hash}
		</div>
	)
}



export default Hasher