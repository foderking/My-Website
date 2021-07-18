import SHA from 'jssha'



export const algos = [
	'SHA-1', 
	'SHA-224', 
	'SHA-256', 
	'SHA-384', 
	'SHA-512', 
	'SHA3-224', 
	'SHA3-256', 
	'SHA3-384', 
	'SHA3-512'
]


export function hashFunc(text, shaAlgo, setHash)
{
	if ( !algos.includes(shaAlgo) ) {
		console.error('Invalid Algorithm !!!')
		return null
	}

	const shaObject = new SHA(shaAlgo, 'TEXT', { encoding: 'UTF8' })

	shaObject.update(text)

	setHash( shaObject.getHash('HEX') )
}

