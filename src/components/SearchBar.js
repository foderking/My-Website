import React from 'react'
import Button from './main/Button'
import InputField from './hooks/InputField'
import Input from './main/Input'

const SearchBar = (props) => 
{
	const search = InputField('search','')

	function handleSubmit(event) 
	{
		event.preventDefault()
		console.log(search.main.value)
		search.reset()
	}

	return (
		<>
			<form className={props.formClass} onSubmit={handleSubmit} >
				<Input
					state={search}
					placeholder={props.inputPlaceholder} 
					aria-label={props.inputLabel}
					className={props.inputClass} 
				/>

				<Button 
					class={props.buttonClass} 
					type={props.buttonType} 
					text={props.buttonText} 
				/>
			</form>
		</>
	)
}


export default SearchBar