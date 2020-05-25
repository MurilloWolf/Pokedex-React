import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;
`
const Pokedex = styled.div`
	background: #f01;
	color: #ddd;
	width: 100%;
	max-width: 568px;
	height: 100vh;
	max-height: 812px;
`
const Wrapper = styled.div`
	width: 100%;
	height: 80%;

	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-flow: column nowrap;
`

const Styles = { Container, Pokedex, Wrapper }

export default Styles
