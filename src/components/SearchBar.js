import React from 'react'

const SearchBar = (props) => 
{
	return (
		<>
			<form onSubmit={props.handleSubmit} >
				<input onChange={props.onChange} />
				<button>
					{props.buttonText}
				</button>
			</form>
		</>
	)
}


export default SearchBar