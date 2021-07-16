import React from 'react'


const AppMain = (props) =>
{
	return (
		<div id='app-page' className='ba b--black-30 bg-light-gray'>
			<h2 className='b ttu'>{props.head}</h2>

			{props.children}
		</div>
	)

}

export default AppMain