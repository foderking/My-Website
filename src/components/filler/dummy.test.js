const dummy = require('./dummy')

const MAX_PARAGRAPHS = dummy.getMaxParagraphNo() 
const MAX_LINE = dummy.getMaxSentenceNo(true) 

describe('testing "generateRandomParagraph()"', () => {
	test('should generate correct paragraphs', () => {
		const text = dummy.generateRandomParagraph(5)	
		// console.log(text)

		expect( dummy.paragraphSplit(text).length ).toBe(5)
	})

	test('behaviour when generating 0 paragraphs', () => {
		const text = dummy.generateRandomParagraph(0)	
		// console.log(text, dummy.paragraphSplit(text))

		expect( dummy.paragraphSplit(text).length ).toBe(0)
	})

	test('behaviour when generating the maximum amount of paragraphs', () => {
		const text = dummy.generateRandomParagraph(MAX_PARAGRAPHS)	
		// console.log(text, dummy.paragraphSplit(text))

		expect( dummy.paragraphSplit(text).length ).toBe(MAX_PARAGRAPHS)
	})

	test('should work with a random number of paragraphs', () => {
		const no = dummy.Random(MAX_PARAGRAPHS) 
		const text = dummy.generateRandomParagraph(no)	
		// console.log(no)

		expect( dummy.paragraphSplit(text).length ).toBe(no)
	})
})

describe('testing "generateRandomLine()"', () => {
	test('should generate correct sentence', () => {
		const text = dummy.generateRandomLine(5)	
		// console.log(text)

		expect( dummy.sentenceSplit(text).length ).toBe(5)
	})

	test('behaviour when generating sentence with 0 words ', () => {
		const text = dummy.generateRandomLine(0)	
		// console.log(text, dummy.paragraphSplit(text))

		expect( dummy.sentenceSplit(text).length ).toBe(0)
	})

	test('behaviour when generating the maximum amount of words', () => {
		const text = dummy.generateRandomLine(MAX_LINE)	
		// console.log(text, dummy.paragraphSplit(text))

		expect( dummy.sentenceSplit(text).length ).toBe(MAX_LINE)
	})

	test('should work with a random number of paragraphs', () => {
		const no = dummy.Random(MAX_LINE) 
		const text = dummy.generateRandomLine(no)	
		// console.log(no)

		expect( dummy.sentenceSplit(text).length ).toBe(no)
	})
})

describe('testing "generateRandomWord()"', () => {
		test('should generate correct word', () => {
		const text = dummy.generateRandomWord()	
		// console.log(text)

		expect( dummy.sentenceSplit(text).length ).toBe(1)
	})


})
