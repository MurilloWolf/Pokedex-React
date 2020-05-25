import styled from 'styled-components'

const Container = styled.div`
	background: #333;
	box-shadow: none;
	border-radius: 4px;
	width: 100%;
	max-width: 350px;
	height: 100vh;
	max-height: 450px;
	border: none !important;
	/* 	transition: transform 0.2s ease;
	:hover {
		transform: translate(0, -10px);
	} */
`

const CardHeader = styled.div`
	width: 100%;
	height: auto;
	text-align: center;
	text-transform: capitalize;
	margin: 0.5rem;
`
const CardBody = styled.div`
	width: 100%;
	height: 70%;
	display: flex;
	justify-content: center;
	align-items: center;
`

const CardFooter = styled.div`
	margin: 1.125rem 0;
	width: 100%;
	height: auto;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-flow: row nowrap;
`

const Image = styled.img`
	box-shadow: none;
	border: none;
	border-radius: 5px;
	width: 50%;
`

type PokemonType = {
	background?: string
}

const Type = styled.div<PokemonType>`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	text-transform: capitalize;
	border: none;
	border-radius: 4px;
	width: 64px;
	height: 32px;
	color: #fff;
	background: ${(props) => props.background};
`

const Styles = { Container, Image, CardHeader, CardBody, CardFooter, Type }
export default Styles
