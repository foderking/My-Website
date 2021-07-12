import { Random } from '../filler/dummy'


const RANGE = 100000
let store = []
let rand

function RandomNumGen(DEBUG = false)
{
	for (; ;) {
		rand = Random(RANGE)

		if ( !store.includes(rand) ) {
			store.push(rand)

			return rand 
		}
		console.log('Collision detected')
	}
}


export default RandomNumGen