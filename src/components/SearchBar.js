import React from 'react'
import Button from './main/Button'

const SearchBar = (props) => 
{
	return (
		<>
			<form className={props.formClass} onSubmit={props.handleSubmit} >
				<input 
					type={props.inputType} 
					placeholder={props.inputPlaceholder} 
					aria-label={props.inputLabel}
					className={props.inputClass} 
					onChange={props.onChange} 
					value={props.value}
				/>

				<Button class={props.buttonClass} type={props.buttonType} text={props.buttonText} />
			</form>
		</>
	)
}


export default SearchBar