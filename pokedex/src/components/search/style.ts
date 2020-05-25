import styled from 'styled-components'

const Input = styled.input`
	color: #212121 !important;

	border: 1px solid #333;
	outline: 0;
	background: rgba(214, 40, 40, 0.7);
	width: 80%;
	height: 32px;
	border-radius: 4px;

	-webkit-border-radius: 4px;
	box-shadow: 2px 2px 3px #333333;
	-moz-box-shadow: 2px 2px 3px #333333;
	-webkit-box-shadow: 2px 2px 3px #333333;

	transition: filter 0.2s ease-in-out;
	padding: 1rem 1rem;
	margin: 1rem 0;
	line-height: 1.35;
	font-weight: bolder;
	font-size: 24px;
	color: #fff !important;
	:hover,
	:focus {
		filter: brightness(150%);
	}
`

const Styles = { Input }

export default Styles
