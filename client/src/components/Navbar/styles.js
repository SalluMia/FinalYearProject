import { styled } from '@mui/material/styles'
import { deepPurple } from '@mui/material/colors'
import { fontFamily } from '@mui/system'
import bg from '../../images/bg.jpg' 
const PREFIX = 'NavBar'
export const classes = {
	root: `${PREFIX}-root`,
	appBar: `${PREFIX}-appBar`,
	heading: `${PREFIX}-heading`,
	logo: `${PREFIX}-logo`,
	toolbar: `${PREFIX}-toolbar`,
	profile: `${PREFIX}-profile`,
	logout: `${PREFIX}-logout`,
	userName: `${PREFIX}-userName`,
	brandContainer: `${PREFIX}-brandContainer`,
	avatar: `${PREFIX}-avatar`,
	avaatar: `${PREFIX}-avaatar`,
	bar: `${PREFIX}-bar`,
	Acct: `${PREFIX}-Acct`,
	
}

export const Root = styled('div')(({ theme, floating }) => ({
	[`&.${classes.root}`]: {
		padding: '60px 0px',
		width:'97%',
		boxSizing:'border-box',
		margin:'0 auto',
		// margin:'10px',
		 borderRadius:'10px',
		backgroundImage:`url(${bg})`,
		backgroundPosition:'center',
		backgroundSize:'cover',
		border:'2px solid #f8f9fa',
		// backgroundColor:'#293241',
		backdropRepeat:'no-repeat',
		// backdropFilter: 'blur(10px) !important',
		backgroundBlendMode: 'darken !important',
		backgroundColor: 'rgba(0, 0, 0, 0.3) !important',
	},
	[`& .${classes.avaatar}`]: {
		margin: theme.spacing(1),
		height: '40px',
		width: '40px',
	},
	[`& .${classes.appBar}`]: {
		position: 'static',
		backgroundColor:'white',
		borderLeft:'20px solid #02325c ',
		borderTopRightRadius:'5px',
		borderBottomRightRadius:'5px',
		margin:'0 auto',
		display: 'flex',
		alignItems:'center',
		justifyContent:'center',
		width:'90%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: '5px 50px',
		
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.down(360)]: {
			padding: '10px 30px',
		},
	},
	[`& .${classes.heading}`]: {
		height: floating ? 50 : 100,
		[theme.breakpoints.down(400)]: {
			width: '-webkit-fill-available',
		},
	},

	[`& .${classes.logo}`]: {
		// marginLeft: '10px',
		marginTop: '5px',
		height: floating ? 50 : 60,
		[theme.breakpoints.down(400)]: {
			display: 'none',
		},
	},

	[`& .${classes.bar}`]: {
		 color:'black',
		 marginTop:'25px',
		 marginLeft:'10px',
		 marginRight:'10px',
		 fontWeight:'bold',
	},
	[`& .${classes.Acct}`]: {
		color:'#00296b',
		marginTop:'25px',
		marginLeft:'0px',
		// marginRight:'20px',
		width:'200px',
		fontSize:'16px',
		fontFamily:'Nunito',
		fontWeight:'bold',
		textDecoration:'none',

   },

	[`& .${classes.toolbar}`]: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems:'flex-start',
		width: 400,
		[theme.breakpoints.down('md')]: {
			width: '-webkit-fill-available',
			justifyContent: 'center',
			display: floating ? 'none' : 'flex',
		},
		[theme.breakpoints.down(360)]: {
			display: 'block',
			justifyContent: 'space-between',
		},
	},
	[`& .${classes.profile}`]: {
		display: 'flex',
		justifyContent: 'space-between',
		width: 400,
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			width: 'auto',
			marginTop: 20,
			justifyContent: 'center',
		},
		[theme.breakpoints.down(360)]: {
			// display: 'none',
			justifyContent: 'space-between',
		},
	},
	[`& .${classes.logout}`]: {
		backgroundColor: '#023e8a',
		fontFamily:'Nunito !important',
		fontWeight:'bold !important',
		letterSpacing:'1px',
		color:'white',
		borderRadius: '5px',
		marginTop:'18px',
		// width:'100px'
	},
	[`& .${classes.userName}`]: {
		display: 'flex',
		textAlign: 'center',
		marginTop:'12px',
		alignItems: 'center',
		color:'#00296b !important',
		fontFamily: 'Nunito !important',
		fontWeight: 'bold !important',
		fontSize:'16px',
		// width:'100px',
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			width: 'max-content',
			maxWidth: '123px',
			alignItems: 'center',
			padding: '0 20px 0 20px',
		},
		[theme.breakpoints.down(360)]: {
			display: 'none',
		},
	},
	[`& .${classes.brandContainer}`]: {
		display: 'flex',
		// alignItems: 'center',
		textDecoration:'none !important',
	},
	[`& .${classes.avatar}`]: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500],
	
	},
}))

export default Root
