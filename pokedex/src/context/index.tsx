import React from 'react'

interface Pokemon {
	name: string
	url: string
}

interface State {
	state: {
		selected: {
			name: string
			url: string
		}
		pokemons: Array<Pokemon>
	}
}

const initialState: State = {
	state: {
		selected: {
			name: '',
			url: '',
		},
		pokemons: [
			{
				name: '',
				url: '',
			},
		],
	},
}

const PokeContext = React.createContext(initialState)

export const PokeProvider = PokeContext.Provider
export const PokeConsumer = PokeContext.Consumer
export default PokeContext
