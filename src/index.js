import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { HashRouter, BrowserRouter as Router } from 'react-router-dom'



ReactDOM.render(
	<Router >
		<HashRouter>
			<App />
		</HashRouter>
	</Router>,
	document.getElementById('root')
)
