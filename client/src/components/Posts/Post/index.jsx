import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined'
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import moment from 'moment'

import { useState } from 'react'
import { CardActions, CardContent, CardMedia, Button, Typography, ButtonBase, Card } from '@mui/material'
import { Root, classes } from './styles'
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../actions/posts'
import { useNavigate } from 'react-router-dom'
import { color, padding } from '@mui/system';


const Post = ({ post, setCurrentId, user, snackBar }) => {
	const dispatch = useDispatch()
	const history = useNavigate()
	const [likes, setLikes] = useState(post?.likes)
	const userId = user?.result.googleId || user?.result?._id
	const hasLikedPost = likes.find((like) => like === userId)

	const handleLike = async () => {
		dispatch(likePost(post._id))
		setLikes(hasLikedPost ? likes.filter((id) => id !== userId) : [...likes, userId])
	}
	const Likes = () => {
		if (likes.length > 0)
			return hasLikedPost ? (
				<Typography variant="body2" sx={{ align: 'center', display: 'flex', color: '#f77f00' }}>
					<FavoriteBorderIcon fontSize="small" />
					&nbsp; {likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} Like${likes.length > 1 ? 's' : ''}`}
				</Typography>
			) : (
				<Typography variant="body2" sx={{ color: '#ff595e',fontWeight:'bold' ,fontSize:'12px !important',fontFamily:'Nunito', align: 'center', display: 'flex' }}>
					<FavoriteIcon fontSize="small" sx={{ color: '#ff595e' }} />
					&nbsp; {`${likes.length} Like${likes.length > 1 ? 's' : ''}`}
				</Typography>
			)
		return (
			<Typography variant="body2" color="primary" sx={{ color: '#ff595e', align: 'center', display: 'flex' }}>
				<FavoriteIcon fontSize="small" sx={{ color: '#ff595e', fontSize:'15px !important', fontFamily:'Nunito !important' }} />
				&nbsp; Like
			</Typography>
		)
	}



	const isLongMessage = post.message.length > 100
	const openPost = () => history(`/posts/${post._id}`)
	return (

		<Root className={classes.root}>
			<Card className={classes.card} raised elevation={0}  >
				<ButtonBase className={classes.cardAction} onClick={openPost} component="span">
					<div className={classes.infodate}>
						<Typography variant="h6" sx={{ paddingLeft: '15px', fontFamily: 'Nunito', paddingTop: '5px', color: 'white', backgroundColor: '#02325c', fontSize: '13px', fontWeight:'bold', border:'0 !important' }}>
							{post.name}
						</Typography>
						<Typography variant="body2" sx={{ paddingLeft: '15px', fontFamily: 'Nunito', color: 'white', paddingBottom: '5px', backgroundColor: '#02325c', fontSize: '10px', borderBottom: '2px solid #233d4d' }}>
							{moment(post.createdAt).fromNow()}
						</Typography>
					</div>


					<CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
					<div className={classes.details}>
						<Typography className={classes.title} variant="h5" align="center" gutterBottom>
							{post.title}
						</Typography>
						{post._private && (
							<div align="center">
								<Button variant="contained" className={classes.privateLabel} size="small" disableElevation>
									PRIVATE
								</Button>
							</div>
						)}
						<Divider></Divider>
						<CardContent style={{ padding: '10px', margin:'0px' }} className={classes.MsgDetail}>
							<Typography variant="body2" sx={{ wordWrap: 'break-word'}} component="p" textAlign={isLongMessage ? 'left' : 'center'}>
								{`${post.message.slice(0, 100)} ${isLongMessage ? '...' : ''}`}
							</Typography>
						</CardContent>
					</div>
				</ButtonBase>
				{userId === post?.creator && (
					<div className={classes.overlay2}>
						<Button style={{ color: 'whitesmoke' }} size="small" onClick={() => setCurrentId(post._id)}>
							<MoreHorizIcon fontSize="medium" />
						</Button>
					</div>
				)}
				<CardActions className={classes.cardActions}>
					<Typography variant="body2" color="textSecondary" sx={{fontWeight:'bold',border:'1px solid #4950571b',color: '#495057', fontFamily:'Nunito', backgroundColor:'#e9ecef', padding:'4px', fontSize:'12px', borderRadius:'3px' }}>
						{post.tags.map((tag) => `#${tag} `)}
					</Typography>
					<Button size="small" color="primary" disabled={!user?.result} onClick={handleLike} style={{ align: 'center' }}>
						<Likes />
					</Button>
					{userId === post?.creator && (
						<Button size="small" style={{ color: '#ae0050' }} onClick={() => dispatch(deletePost(post._id, snackBar))}>
							<DeleteIcon fontSize="small" /> &nbsp; Delete{' '}
						</Button>
					)}
				</CardActions>
			</Card>
		</Root>



	)

}

export default Post
