const colors = [
	{ type: 'water', color: '#3a86ff' },
	{ type: 'grass', color: '#8fc93a' },
	{ type: 'fire', color: '#f90f39' },
	{ type: 'normal', color: '#a8763e' },
	{ type: 'electric', color: '#efca08' },
	{ type: 'ice', color: '#72ddf7' },
	{ type: 'poison', color: '#540d6e' },
	{ type: 'psychic', color: '#f7aef8' },
	{ type: 'dark', color: '#080708' },
	{ type: 'stell', color: '#e5dada' },
	{ type: 'fighting', color: '#e21d40' },
	{ type: 'ghost', color: '#002553' },
	{ type: 'rock', color: '#9a998c' },
	{ type: 'dragon', color: '#6610f2' },
	{ type: 'flying', color: '#a088eb' },
	{ type: 'bug', color: '#02c39a' },
]

const switchT = (type: string): string => {
	let color = colors.map((item) => {
		if (item.type === type) return item.color
	})

	return color.toString().replace(/,/g, '')
}
const switchTypes = (type: string) => {
	switch (type) {
		case 'water':
			return '#3a86ff'

		case 'grass':
			return '#8fc93a'
		default:
			return '#fff'
	}
}

export default switchTypes
export { switchT }
