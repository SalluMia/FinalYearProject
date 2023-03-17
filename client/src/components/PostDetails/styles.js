import { styled } from '@mui/material/styles'

const PREFIX = 'PostDetails'
export const classes = {
	root: `${PREFIX}-root`,
	media: `${PREFIX}-media`,
	card: `${PREFIX}-card`,
	section: `${PREFIX}-section`,
	imageSection: `${PREFIX}-imageSection`,
	recommendedPosts: `${PREFIX}-recommendedPosts`,
	loadingPaper: `${PREFIX}-loadingPaper`,
	commentText: `${PREFIX}-commentText`,
	paragraph: `${PREFIX}-paragraph`,
	Creator: `${PREFIX}-Creator`,
	Rec: `${PREFIX}-Rec`,
	Datedata: `${PREFIX}-Datedata`,
	tags: `${PREFIX}-tags`,
	title: `${PREFIX}-title`,
	container: `${PREFIX}-container`,
	privateLabel: `${PREFIX}-privateLabel`,
	notFound: `${PREFIX}-notFound`,
	recommendedPostGrid: `${PREFIX}-recommendedPostGrid`,
}

export const Root = styled('div')(({ theme }) => ({
	[`&.${classes.root}`]: {
		// margin: '10px 5px',
		fontFamily: 'Nunito',
		
	},
	[`& .${classes.media}`]: {
		borderRadius: '10px',
		objectFit: 'cover',
		width: '100%',
		maxHeight: '500px',
		filter:'greyscale(50%)',
		transition: 'transform .2s',
		cursor:'pointer',
		borderBottom:'5px solid #023e8a',
		'&:hover': {
			transform: 'scale(1.03)',
			zIndex:'9999999',
			borderBottom:'5px solid #023e8a',
			opacity:'0.9'
		},
	},
	[`& .${classes.card}`]: {
		display: 'flex',
		width: '100%',
		
		flexDirection: 'column',
		[theme.breakpoints.down('sm')]: {
			flexWrap: 'wrap',
		},
	},
	[`& .${classes.section}`]: {
		borderRadius: '5px',
		margin: '10px',
		flex: 1,
		[theme.breakpoints.down('md')]: {
			flexWrap: 'wrap',
		},
	},
	[`& .${classes.imageSection}`]: {
		[theme.breakpoints.down('sm')]: {
			marginLeft: 0,
		},
	},
	[`& .${classes.Rec}`]: {
		 fontWeight:'bold',
		 fontFamily:'Nunito',
		 width:'250px',
		//  color:'white',
		 padding:'10px',
		 backgroundColor:'#caf0f8',
		 borderLeft:'8px solid #023e8a'
	},
	[`& .${classes.recommendedPosts}`]: {
		display: 'flex',
		justifyContent: 'center',
		minheight: '39vh',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			alignItems: 'center',
		},
	},
	[`& .${classes.loadingPaper}`]: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		padding: '10px',
		width:'95%',
		margin:'20px auto',
		borderRadius: '5px',
		minheight: '39vh',
		backgroundColor: 'rgba(255, 255, 255, .09)',
		backdropFilter: 'blur(10px)',
		flexDirection: 'column',
		border:'1px solid rgba(179, 178, 178, 0.648)',
		backgroundColor:'white',
        boxShadow:'none',
	},
	[`& .${classes.commentText}`]: {
		width: '94%',
		display: 'flex',
		color: 'black',
		fontFamily: 'Nunito',
		fontWeight:'bold',
		overflowWrap: 'break-word',
		wordWrap: 'break-word',
		hyphens: 'auto',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			maxWidth: '280px',
		},
		[theme.breakpoints.down(385)]: {
			maxWidth: '225px',
		},
	},
	[`& .${classes.paragraph}`]: {
		wordBreak: 'break-word',
		textAlign: 'justify',
		color: 'black',
		fontFamily: 'Nunito',
	},
	[`& .${classes.Creator}`]: {
		fontWeight:'bold',
		color: 'black',
		fontFamily: 'Nunito',
	},
	[`& .${classes.Datedata}`]: {
		fontSize:'14px',
		color: 'black',
		fontFamily: 'Nunito',
	},
	[`& .${classes.tags}`]: {
		// textAlign: 'center',
		backgroundColor:'#e9ecef',
		padding:'5px',
		width:'300px',
		fontSize:'16px',
		color:'#0077b6',
		borderRadius:'10px',
		fontFamily: 'Nunito',
		// margin:'0 10px'
	},
	[`& .${classes.title}`]: {
		// textAlign: 'center',
		wordBreak: 'break-word',
		fontWeight:'bold',
		fontFamily: 'Nunito',
		color:'#023e8a'
	},
	[`& .${classes.privateLabel}`]: {
		backgroundColor: '#00b5ff',
		align: 'center',
	},
	[`& .${classes.notFound}`]: {
		justifyContent: 'space-around',
		flexDirection: 'row',
		display: 'flex',
		alignItems: 'center',
		color: 'black',
		width: '100%',
	},
	[`& .${classes.recommendedPostGrid}`]: {
		justifyContent: 'flex-start',
		marginTop: 5,
		marginLeft: 0,
		flexDirection: 'row',
		width: '100%',
	},
}))

export default Root
