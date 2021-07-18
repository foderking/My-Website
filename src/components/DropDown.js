import React from 'react'
import RandomNumGen from "./functionality/random"


const DropDown = (props) => 
	<select name={props.name} value={props.value} onChange={props.onChange}>
		{
			props.parameters.map( each => 
				<option key={RandomNumGen()} value={each} id={`select-${each}`} >{each}</option>
			)
		}
	</select>

export default DropDown