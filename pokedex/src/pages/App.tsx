import React from 'react'
import Styles from '../components/App/style'
import Search from '../components/search'
import Card from '../components/Card'
import PokeContext, { PokeProvider } from '../context'

import axios from 'axios'
function App() {
	const contextPoke = React.useContext(PokeContext)
	const [state, setState] = React.useState(contextPoke)

	React.useEffect(() => {
		async function getData() {
			await axios
				.get('https://pokeapi.co/api/v2/pokemon?limit=151')
				.then((res) => {
					setState({
						state: {
							selected: contextPoke.state.selected,
							pokemons: res.data.results,
						},
					})
				})
		}
		getData()
	}, [])

	const handleChange = (name: string, url: string) => {
		setState({
			state: {
				selected: {
					name,
					url,
				},
				pokemons: state.state.pokemons,
			},
		})
	}

	return (
		<PokeProvider value={state}>
			<Styles.Container>
				<Styles.Pokedex>
					<Styles.Wrapper>
						<Search changeSelected={handleChange} />
						<Card />
						<p>{contextPoke.state.selected.name}</p>
					</Styles.Wrapper>
				</Styles.Pokedex>
			</Styles.Container>
		</PokeProvider>
	)
}

export default App
