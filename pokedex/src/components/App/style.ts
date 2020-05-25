import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	height: 100vh;
	background: #010101;
	display: flex;
	justify-content: center;
	align-items: center;
`
const Pokedex = styled.div`
	border-radius: 10px;
	background: #d62828;
	color: #ddd;
	width: 100%;
	max-width: 568px;
	height: 100vh;
	max-height: 812px;
`
const Wrapper = styled.div`
	width: 100%;
	height: 85%;

	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-flow: column nowrap;
`
const visorWrapper = styled.div`
	background: #ced4da;
	box-shadow: none;
	border-radius: 4px;
	width: 100%;
	max-width: 400px;
	height: 100vh;
	max-height: 525px;
	border: none !important;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-flow: column nowrap;
`

type PokeHeader = {
	bg?: string
}
const PokeHeader = styled.div<PokeHeader>`
	margin: 1.125rem 0;
	padding: 0 0 1rem 0;
	width: 100%;
	height: auto;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-flow: row nowrap;
	border-radius: 4px;
	-moz-border-radius: 1rem;
	-webkit-border-radius: 4px;
	box-shadow: 2px 2px 2px #333333;
	-moz-box-shadow: 2px 2px 2px #333333;
	-webkit-box-shadow: 2px 2px 2px #333333;
	transition: filter 0.2s ease-in-out;
`

type PokedexCircle = {
	size?: string
	bg?: string
}

const Circle = styled.div<PokedexCircle>`
	background: ${(props) => props.bg || '#ddd'};

	border-radius: 50% !important;
	-moz-border-radius: 1rem;
	-webkit-border-radius: 4px;
	box-shadow: 2px 2px 2px #333333;
	-moz-box-shadow: 2px 2px 2px #333333;
	-webkit-box-shadow: 2px 2px 2px #333333;
	transition: filter 0.2s ease-in-out;
	width: ${(props) => (props.size === 'sm' ? '32px' : '86px')};
	height: ${(props) => (props.size === 'sm' ? '32px' : '86px')};
`
const Styles = { Container, Pokedex, Wrapper, visorWrapper, PokeHeader, Circle }

export default Styles
