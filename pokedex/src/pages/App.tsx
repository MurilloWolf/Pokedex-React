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
						<Styles.PokeHeader>
							<Styles.Circle style={{ alignSelf: 'flex-start' }} />

							<Styles.Circle size={'sm'} bg={'#8fc93a'} />
							<Styles.Circle size={'sm'} bg={'#efca08'} />
							<Styles.Circle size={'sm'} bg={'#f90f39'} />
						</Styles.PokeHeader>
						<Search changeSelected={handleChange} />
						<Styles.visorWrapper>
							<Card />
						</Styles.visorWrapper>
						<p>{contextPoke.state.selected.name}</p>
					</Styles.Wrapper>
				</Styles.Pokedex>
			</Styles.Container>
		</PokeProvider>
	)
}

export default App
