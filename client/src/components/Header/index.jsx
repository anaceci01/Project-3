import React from 'react'
import './header.css'

const HeaderComponent = props =>  {
	let Greeting
	if (props.user === null) {
		Greeting = <h1>Welcome to Gig, the App For Some Extra Cash</h1>
	} else if (props.user.firstName) {
		Greeting = 
			<p>
				Welcome back, <strong>{props.user.firstName}</strong>
			</p>
		console.log('firstname')
		
	} else if (props.user.local.username) {
		Greeting = 
			<p>
				Welcome back, <strong>{props.user.local.username} </strong>
			</p>
		console.log('username')
	}
	return (
		<div className="Header">
			{Greeting}
		</div>
	)
}

export const Header = React.memo(HeaderComponent);