import React, { ReactEventHandler } from 'react'
import Styles from './style'
import PokeContext from '../../context/'

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

interface IProps {
	state?: State
	changeSelected: Function
	children?: Node
}

const Search: React.FC<IProps> = (props) => {
	const contextPoke = React.useContext(PokeContext)

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const text = event.target.value
		const { pokemons } = contextPoke.state
		const pokeCard = pokemons.filter((item) => {
			if (text == 'mew') return item.name == text
			else return item.name.startsWith(text)
		})
		if (pokeCard.length > 0)
			props.changeSelected(pokeCard[0].name, pokeCard[0].url)
		else props.changeSelected('', '')
	}

	return (
		<>
			<Styles.Input type="text" placeholder={''} onChange={handleChange} />
			{console.log(contextPoke)}
		</>
	)
}

export default Search
