import React from 'react'

import Styles from './style'
import PokeContext from '../../context'

import axios from 'axios'
interface ICardContext {
	name: string
	url: string
}

interface IProps {
	image?: string
}

const Card: React.FC<IProps> = () => {
	const { state } = React.useContext(PokeContext)
	const [image, setImage] = React.useState('')

	React.useEffect(() => {
		async function getImage() {
			let url = state.selected.url
			let newurl = url.split('pokemon/')

			if (newurl !== undefined) {
				url = newurl[1]?.replace('/', '')
				setImage(`https://pokeres.bastionbot.org/images/pokemon/${url}.png`)
			} else setImage('')
		}
		getImage()
	}, [state])

	return (
		<Styles.Container>
			<h1>{state.selected.name}</h1>
			<Styles.Image src={image || ''} />
		</Styles.Container>
	)
}

export default Card
