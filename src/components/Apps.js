import React from 'react'
import DummyParagraph from './filler/DummyParagraph'
import { generateRandomLine, generateRandomWord } from './filler/dummy'
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom'
import DownloadCheck from './apps/DownloadCheck'
import Hasher from './apps/Hasher'
import AppMain from './apps/AppMain'
import Card from './main/Card'
import RandomNumGen from './functionality/random'




const app1 = 'Download Check'
const app2 = 'Hasher'
const app3 = generateRandomLine(2)
const app4 = generateRandomLine(2)

const allApps = [
	{
		name : 'Download Check',
		description: generateRandomLine(12),
		small: generateRandomWord(),
	},
	{
		name : 'Hasher',
		description: generateRandomLine(12),
		small: generateRandomWord(),
	},
	{
		name : generateRandomLine(2),
		description: generateRandomLine(12),
		small: generateRandomWord(),
	},
	{
		name : generateRandomLine(2),
		description: generateRandomLine(12),
		small: generateRandomWord(),
	},

	{
		name : generateRandomLine(2),
		description: generateRandomLine(12),
		small: generateRandomWord(),
	},


	{
		name : generateRandomLine(2),
		description: generateRandomLine(12),
		small: generateRandomWord(),
	},

]





const Apps = () =>
{
	let { path, url } = useRouteMatch()

	return (

		<Switch>
			<Route exact path={`${path}/${app1}`}>
				<AppMain head={app1}>
					<DownloadCheck />
				</AppMain>
			</Route>

			<Route path={`/apps/${app2}`}>
				<AppMain head={app2}>
					<Hasher />
					{/* <DummyParagraph length={1} /> */}
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
				<Index url={url} />
			</Route>
		</Switch>
	)
}

const AppMainInfo = () =>
<section className="py-5 text-center container">
	<div className="row py-lg-5">
		<div className="col-lg-6 col-md-8 mx-auto">
			<h1 className="fw-light">Apps directory</h1>
			<p className="lead text-muted">{generateRandomLine(33)}</p>
			{/* <p> */}
				{/* <a href="#" className="btn btn-primary my-2">Main call to action</a>
				<a href="#" className="btn btn-secondary my-2">Secondary action</a> */}
			{/* </p> */}
		</div>
	</div>
</section>


const AppCard = (props) =>
	<div className="col">
		<div className="text-center card shadow-sm">
			<Link to={props.link} >
				<svg 
					className="bd-placeholder-img card-img-top" 
					width="100%" height="225" 
					xmlns="http://www.w3.org/2000/svg" 
					role="img" aria-label="Placeholder: Thumbnail" 
					preserveAspectRatio="xMidYMid slice" focusable="false"
				>
					<title>Placeholder</title>
					<rect width="100%" height="100%" fill="#55595c"/>

					<text  dominantBaseline="middle" textAnchor="middle" x="50%" y="50%" fill="#eceeef" dy=".3em">
						{props.name}
					</text>

				</svg>
			</Link>

			<div className="card-body">
				<p className="card-text">{props.description}</p>

				<div className="d-flex justify-content-between align-items-center">
					<div className="btn-group">
							{/* <button type="button" className="btn btn-sm btn-outline-secondary">
									View
							</button> */}
							<button type="button" className="btn btn-sm btn-outline-secondary">About</button>
					</div>
					<small className="text-muted">{props.small}</small>
				</div>
			</div>
		</div>
	</div>



const Index = ({url}) => 
{

	return (
		<div>
			<AppMainInfo />

			<div className="album py-5 bg-light">
				<div className="container">
					<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

						{
							allApps.map(each =>
								<AppCard 
									key={RandomNumGen()} 
									{...each}
									// name={each.name}
									// description={each.description}
									// small={each.small}
									link={`${url}/${each.name}`}
								/>
							)
						}

					</div>
				</div>
			</div>

			{/* <AppBox link={`/apps/${app1}`} text={app1} />
			<AppBox link={`/apps/${app2}`} text={app2} />
			<AppBox link={`/apps/${app3}`} text={app3} />
			<AppBox link={`/apps/${app4}`} text={app4} /> */}
		</div>
	)
}



const AppBox = (props) =>
<Link to={props.link} >
	<div classNameName='app-box'>
		<img classNameName='img-thumbnail' src='https://via.placeholder.com/150' />
		{props.text}
	</div>
</Link>




export default Apps