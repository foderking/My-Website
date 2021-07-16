import React from 'react'
import DummyParagraph from './filler/DummyParagraph'
import { generateRandomLine } from './filler/dummy'
import { Route, Switch, NavLink, Link } from 'react-router-dom'
import DownloadCheck from './apps/DownloadCheck'
import AppMain from './apps/AppMain'




const app1 = 'Download Check'
const app2 = generateRandomLine(3)
const app3 = generateRandomLine(3)
const app4 = generateRandomLine(3)





const Apps = () =>
{
	return (
		<Switch>
			<Route path={`/apps/${app1}`}>
				<AppMain head={app1}>
					<DownloadCheck />
				</AppMain>
			</Route>

			<Route path={`/apps/${app2}`}>
				<AppMain head={app2}>
					<DummyParagraph length={1} />
				</AppMain>
			</Route>

			<Route path={`/apps/${app3}`}>
				<AppMain head={app3}>
					<DummyParagraph length={1} />
				</AppMain>
			</Route>

			<Route path={`/apps/${app4}`}>
				<AppMain head={app4}>
					<DummyParagraph length={1} />
				</AppMain>
			</Route>

			<Route path='/apps'>
				<Index />
			</Route>
		</Switch>
	)
}

const Index = () => 
{

	return (
		<div>
			<h2>Apps Directory</h2>

			<AppBox link={`/apps/${app1}`} text={app1} />
			<AppBox link={`/apps/${app2}`} text={app2} />
			<AppBox link={`/apps/${app3}`} text={app3} />
			<AppBox link={`/apps/${app4}`} text={app4} />
		</div>
	)
}



const AppBox = (props) =>
<Link to={props.link} >
	<div className='app-box'>
		<img className='img-thumbnail' src='https://via.placeholder.com/150' />
		{props.text}
	</div>
</Link>




export default Apps