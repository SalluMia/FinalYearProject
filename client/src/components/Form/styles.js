import { styled } from '@mui/material/styles'

const PREFIX = 'Form'

export const classes = {
	root: `${PREFIX}-root`,
	drag: `${PREFIX}-drag`,
	textField: `${PREFIX}-textField`,
	paper: `${PREFIX}-paper`,
	form: `${PREFIX}-form`,
	buttonSubmit: `${PREFIX}-buttonSubmit`,
	chip: `${PREFIX}-chip`,
}

export const Root = styled('div')(({ theme }) => ({
	[`&.${classes.drag}`]: {
		'*': { pointerEvents: 'none' },
		'& .MuiTextField-root': {
			margin: theme.spacing(0.5, 0),
		},
		'& .MuiFormLabel-root': {
			color: 'black',
		},
		'& .MuiChip-filled': {
			background: '#ffffff70',
		},
	},

	[`&.${classes.root}`]: {
		'& .MuiTextField-root': {
			margin: theme.spacing(0.5, 0),
		},
		'& .MuiFormLabel-root': {
			color: 'black',
		},
		'& .MuiChip-filled': {
			background: '#ffffff70',
		},
	},
	[`& .${classes.textField}`]: {
		borderRadius: 4,
		marginBottom: '1rem',
		display: 'flex',
		padding: theme.spacing(2),
		color: 'black',
	},
	[`& .${classes.paper}`]: {
		padding: theme.spacing(2),
		backgroundColor: 'rgba(255, 255, 255, .09)',
		backdropFilter: 'blur(10px)',
		borderRadius: '5px',
		border:'1px solid rgba(179, 178, 178, 0.648)',
		backgroundColor:'white',
	},
	[`& .${classes.form}`]: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	[`& .${classes.buttonSubmit}`]: {
		marginTop: 10,
	},
	[`& .${classes.chip}`]: {
		margin: '5px 0',
	},
}))

export default Root
