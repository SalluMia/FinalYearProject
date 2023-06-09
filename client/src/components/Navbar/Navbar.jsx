import { useEffect, useCallback, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { AppBar, Typography, Toolbar, Button, Avatar } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Root, classes } from './styles'
import Logo1 from '../../images/Logo1.png'
import decode from 'jwt-decode'
import Avaatar from 'avataaars'

const Navbar = ({ user, setUser, snackBar, floating }) => {
	const token = user?.token
	const dispatch = useDispatch()
	const history = useNavigate()
	const location = useLocation()
	const userIsinAuth = location.pathname === '/auth'

	const logout = useCallback(() => {
		dispatch({ type: 'LOGOUT' })
		history('/')
		snackBar('info', 'Logged out')
		setUser(null)
	}, [history, dispatch, setUser])

	useEffect(() => {
		if (token) {
			const decodedToken = decode(token)
			if (decodedToken.exp * 1000 < new Date().getTime()) logout()
		}
		setUser(JSON.parse(localStorage.getItem('profile')))
	}, [logout, token])

	return (
		
		<Root className={classes.root} floating={floating?.toString()}>
			<AppBar className={classes.appBar} >
				<Link to="/" className={classes.brandContainer}>
					<img  className={classes.logo} src={Logo1} alt="memories" />
				</Link>
				<Toolbar className={classes.toolbar}>
					{user ? (
						<div className={classes.profile}>
							<Link to="/user" style={{ textDecoration: 'none'}}>
								{user.result.avatar ? (
									<Avaatar className={classes.avaatar} avatarStyle="Circle" {...user.result.avatar} />
								) : (
									<Avatar className={classes.avatar} alt={user.result.name} src={user.result.imageUrl}>
										{user.result.name.charAt(0)}
									</Avatar>
								)}
							</Link>
							<Typography className={classes.userName} variant="h6">
								{user.result.name}
							</Typography>
							<Button className={classes.logout} variant="contained" onClick={logout}>
								Logout
							</Button>
						</div>
					) : (
						!userIsinAuth && (
							<Button className={classes.logout} component={Link} to="/auth" variant="contained">
								Sign In
							</Button>
						)
					)}
                       
					   <Typography className={classes.bar}>
								  |
							</Typography>
						<Typography className={classes.Acct} variant="h6" component={Link} to="/auth" >
								  Create account
							</Typography>
					</Toolbar>
				
			</AppBar>
			
		</Root>
	)
}

export default Navbar
