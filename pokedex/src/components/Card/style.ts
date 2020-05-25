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
	transition: transform 0.2s ease;
	:hover {
		transform: translate(0, -10px);
	}
`

const Image = styled.img`
	box-shadow: none;
	border: none;
	border-radius: 5px;
	width: 100%;
`

const Styles = { Container, Image }
export default Styles
