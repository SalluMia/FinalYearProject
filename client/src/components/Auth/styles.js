import { styled } from '@mui/material/styles'

const PREFIX = 'Auth'
export const classes = {
	root: `${PREFIX}-root`,
	paper: `${PREFIX}-paper`,
	avatar: `${PREFIX}-avtar`,
	form: `${PREFIX}-form`,
	submit: `${PREFIX}-submit`,
	googleButton: `${PREFIX}-googleButton`,
}

export const Root = styled('div')(({ theme }) => ({
	[`&.${classes.root}`]: {
		'& .MuiFormLabel-root': {
			color: 'black',
		},
	},
	[`& .${classes.paper}`]: {
		marginBottom: theme.spacing(3),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: theme.spacing(2),
		transition: '0.2s',
		backgroundColor: 'white',
		backdropFilter: 'blur(10px)',
		borderRadius: '5px',
	},
	[`& .${classes.avatar}`]: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	[`& .${classes.form}`]: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	[`& .${classes.submit}`]: {
		margin: theme.spacing(1, 0, 1, 0),
	},
	[`& .${classes.googleButton}`]: {
		marginBottom: theme.spacing(2),
	},
}))

export default Root
