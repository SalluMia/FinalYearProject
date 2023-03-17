import { styled } from '@mui/material/styles'

const PREFIX = 'Cards'
export const classes = {
	root: `${PREFIX}-root`,
	loadingCard: `${PREFIX}-loadingCard`,
	loadingCardHeader: `${PREFIX}-loadingCardHeader`,
	postCard: `${PREFIX}-postCard`,
	buttonBase: `${PREFIX}-buttonBase`,
	cardMedia: `${PREFIX}-cardMedia`,
	cardContent: `${PREFIX}-cardContent`,
    overlay: `${PREFIX}-overlay`,
    infodate: `${PREFIX}-infodate`,
    cardActions: `${PREFIX}-cardActions`,
}

export const Root = styled('div')(({ theme }) => ({
	[`&.${classes.root}`]: {
		// margin: '10px 5px',
	},
	[`& .${classes.loadingCard}`]: {
		maxWidth: 345,
		margin: 16,
		width: 300,
		backgroundColor: 'transparent',
	},
	[`& .${classes.loadingCardHeader}`]: {
		marginBottom: 6,
		height: 10,
		width: '80%',
	},
	[`& .${classes.postCard}`]: {
		width: 300,
		maxWidth: 300,
		margin: 16,
		backgroundColor: 'transparent',
		backdropFilter: 'blur(10px)',
		border:'1px solid rgba(179, 178, 178, 0.623)',
		boxShadow:'none',
		transition: 'transform .2s',
		borderBottom:'5px solid #233d4d',
		// marginTop:'10px',
		
		
		'&:hover': {
			transform: 'scale(1.06)',
			zIndex:'9999999',
			// border:'1px solid grey'
		},
	},
	[`& .${classes.buttonBase}`]: {
		width: '100%',
		padding: '0',
		display: 'inline-flex',
		justifyContent: 'flex-start',
		flexDirection: 'column',
	},
	[`& .${classes.infodate}`]: {
		width: '100%',
		padding: '0',
		display: 'inline-flex',
		justifyContent: 'flex-start',
		flexDirection: 'column',
	},
	
	[`& .${classes.cardMedia}`]: {
		height: 200,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		backgroundBlendMode: 'darken',
		
		// filter: 'brightness(.8)',
	},
	[`& .${classes.cardContent}`]: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		height: 200,
	},
	[`& .${classes.overlay}`]: {
		position: 'absolute',
		top: 20,
		left: 20,
		'& .MuiTypography-root': {
			color: 'white',
		},
	},
	[`& .${classes.cardActions}`]: {
		// padding: '0 16px 8px 16px',
		display: 'flex',
		justifyContent: 'flex-start',
		width: '100%',
		position: 'absolute',
		bottom: 5,
		left: 3,
	},
}))