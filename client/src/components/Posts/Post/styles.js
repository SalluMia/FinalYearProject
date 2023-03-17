import { styled } from '@mui/material/styles'
import { fontWeight } from '@mui/system'
import { border } from '@mui/system'

const PREFIX = 'Post'
export const classes = {
	root: `${PREFIX}-root`,
	media: `${PREFIX}-media`,
	border: `${PREFIX}-border`,
	fullHeightCard: `${PREFIX}-fullHeightCard`,
	card: `${PREFIX}-card`,
	overlay: `${PREFIX}-overlay`,
	overlay2: `${PREFIX}-overlay2`,
	grid: `${PREFIX}-grid`,
	tags: `${PREFIX}-tags`,
	details: `${PREFIX}-details`,
	title: `${PREFIX}-title`,
	MsgDetail: `${PREFIX}-MsgDetail`,
	cardAction: `${PREFIX}-cardAction`,
	cardActions: `${PREFIX}-cardActions`,
	privateLabel: `${PREFIX}-privateLabel`,
}

export const Root = styled('div')({
	[`&.${classes.root}`]: {
		// height: '100%',
		backgroundColor:'white !important',
		borderRadius:'5px',
		paddingBottom:'10px !important',
	
		
	},
	
	[`& .${classes.media}`]: {
		paddingTop: '56.25%',
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
		backgroundBlendMode: 'darken',
		transition: 'transform .2s',
		margin:0,
		
		height:'4px',
		// '&:hover': {
		// 	transform: 'scale(4.0)',
		// },
	},
	[`& .${classes.card}`]: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		border:'1px solid rgba(179, 178, 178, 0.623)',
		borderRadius: 5,
		height: '100%',
		position: 'relative',
		backgroundColor: 'rgba(255, 255, 255, .09)',
		backdropFilter: 'blur(10px)',
		transition: 'transform .2s',
		// borderBottom:'5px solid #023e8a',
		
		
		'&:hover': {
			transform: 'scale(1.06)',
			zIndex:'9999999',
			border:'1px solid grey'
		},
	},
	[`& .${classes.overlay}`]: {
		position: 'absolute',
		top: 20,
		left: 20,
	},
	[`& .${classes.overlay2}`]: {
		position: 'absolute',
		top: 20,
		right: 20,
	},
	[`& .${classes.grid}`]: {
		display: 'flex',
	},
	[`& .${classes.tags}`]: {
		display: 'flex',
		justifyContent: 'flex-end',
		margin: 20,
		// padding: '0px',
	},
	[`& .${classes.details}`]: {
		display: 'flex',
		flexDirection: 'column',
		
	},

	[`& .${classes.MsgDetail}`]: {
		 margin:'none !important',
		//  backgroundColor:'red',
		 height:'80px'

		
	},

	[`& .${classes.title}`]: {
		paddingTop: '10px',
		paddingLeft: '10px',
		color: '#233d4d',
		textAlign: "left",
		fontFamily: 'Nunito',
		fontWeight: 'bold'
	},
	[`& .${classes.cardActions}`]: {
		padding: '0 16px 8px 16px',
		display: 'flex',
		justifyContent: 'space-between',
		
	},
	[`& .${classes.cardAction}`]: {
		display: 'block',
		textAlign: 'initial',
		margin:'0'
	},
	[`& .${classes.privateLabel}`]: {
		backgroundColor: '#00b5ff',
		align: 'center',
	},
})

export default Root
