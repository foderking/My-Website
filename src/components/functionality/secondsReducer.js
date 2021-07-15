function secondsReducer(secs)
{
	const MINUTE = 60
	const HOUR = MINUTE**2
	const DAY = 24 * HOUR
	const WEEK = 7 * DAY

	const weeks = Math.floor(secs /  WEEK)
	secs = secs % WEEK
	const days = Math.floor(secs / DAY)
	secs = secs % DAY
	const hours = Math.floor(secs / HOUR)
	secs = secs % HOUR
	const minutes = Math.floor(secs / MINUTE)
	secs = secs % MINUTE
	
	return `${
		weeks ? weeks+" weeks, " : "" 
	} ${
		days ?  days+" days, " : ""
	} ${
		hours ? hours+" hours, " : ""
	} ${
		minutes ? minutes+" minutes, " : ""
	} ${
		Math.round(secs)
	} seconds`
}


export default secondsReducer