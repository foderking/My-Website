import React from 'react'
import InputComp from '../InputComp'
import secondsReducer from '../functionality/secondsReducer'
import InputField from '../hooks/InputField'
import DropDown from '../DropDown'

const DownloadCheck = () => 
{
	const BYTE_CONSTANT = {
		'KB' : 10**3 ,
		'MB' : 10**6,
		'GB' : 10**9,
		'TB' : 10**12,
	}

	const downloadSpeed = InputField('text', '')
	const fileSize = InputField('text', '')

	const downloadSpeedSelect = InputField('text', 'KB')
	const fileSizeSelect = InputField('text', 'MB')

	const DOWNLOAD_SPEED = downloadSpeed.main.value * BYTE_CONSTANT[ downloadSpeedSelect.main.value ] 
	const FILE_SIZE = fileSize.main.value * BYTE_CONSTANT[ fileSizeSelect.main.value ] 

	return (
		<div id='download-check'>
			An application for calculating download time
			<div>
				<div>
					Enter Download Speed :
					<InputComp {...downloadSpeed.main} />
					
					<DropDown
						value={downloadSpeedSelect.main.value} onChange={downloadSpeedSelect.main.onChange} parameters={['KB', 'MB', 'GB', 'TB']}
					/> /s
				</div>

				<div>
					Enter size of file   :
					<input {...fileSize.main}/>

					<DropDown
						value={fileSizeSelect.main.value} onChange={fileSizeSelect.main.onChange} parameters={['KB', 'MB', 'GB', 'TB']}
					/>
				</div>

				<code className='display-5'>{ secondsReducer( FILE_SIZE / DOWNLOAD_SPEED ) }</code>
			</div>
		</div>
	)
}


const SpeedDropDown = (props) => 
	<select name={props.name} value={props.value} onChange={props.onChange}>
		<option id="speed-select-0" value='KB'>KB</option>
		<option id="speed-select-1" value='MB'>MB</option>
		<option id="speed-select-2" value='GB'>GB</option>
		<option id="speed-select-3" value='TB'>TB</option>
	</select>





export default DownloadCheck