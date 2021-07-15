import React from 'react'


const AppMain = (props) =>
{
	return (
		<div id='app-page'>
			<h3>{props.head}</h3>

			{props.children}
		</div>
	)

}

export default AppMain