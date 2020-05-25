import React from 'react'

import Styles from './style'
import PokeContext from '../../context'
import { switchT } from './types'
import axios from 'axios'
interface ICardContext {
	name: string
	url: string
}
interface IType {
	type: {
		name: string
	}
}

interface IProps {
	image?: string
}

const Card: React.FC<IProps> = () => {
	const { state } = React.useContext(PokeContext)
	const [image, setImage] = React.useState('')
	const [types, setTypes] = React.useState([])

	React.useEffect(() => {
		async function getImage() {
			let url = state.selected.url
			let newurl = url.split('pokemon/')

			if (newurl.length > 1) {
				url = newurl[1]?.replace('/', '')
				setImage(`https://pokeres.bastionbot.org/images/pokemon/${url}.png`)

				await axios
					.get(`https://pokeapi.co/api/v2/pokemon/${url}`)
					.then((res) => {
						let resp = res.data.types.map((item: IType) => item.type.name)
						setTypes(resp)
					})
			} else {
				setImage('')
				setTypes([])
			}
		}
		getImage()
	}, [state])

	return (
		<Styles.Container>
			<Styles.CardHeader>
				<h1>{state.selected.name}</h1>
			</Styles.CardHeader>
			<Styles.CardBody>
				<Styles.Image src={image || ''} />
			</Styles.CardBody>
			<Styles.CardFooter>
				{types.map((item, key) => (
					<Styles.Type key={key} background={switchT(item)}>
						{item}{' '}
					</Styles.Type>
				))}
			</Styles.CardFooter>
		</Styles.Container>
	)
}

export default Card
