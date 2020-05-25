import styled from 'styled-components'

const Input = styled.input`
	border: 2px solid #fff;
	color: #212121 !important;

	background: #f10;
	width: 80%;
	height: 32px;
	border-radius: 4px;
	-moz-border-radius: 4px;
	-webkit-border-radius: 4px;
	box-shadow: 1px 1px 2px #333333;
	-moz-box-shadow: 1px 1px 2px #333333;
	-webkit-box-shadow: 1px 1px 2px #333333;
	transition: filter 0.2s ease-in-out;

	:hover {
		filter: brightness(90%);
	}
`

const Styles = { Input }

export default Styles
