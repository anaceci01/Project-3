import React, { Component } from 'react';
import { Header } from '../../components';
import {OutlinedCard} from '../../components/OutlinedCard';
import "./home.css";
import { CreateProfile } from '../../components/CreateProfile'
import { EditProfile } from '../../components/EditProfile'
import { ProfilePage } from '../../components/ProfilePage'

export default class Home extends Component {
	constructor(props) {
		super(props)

		this.state = {
			user: this.props.user
		}
	}

	componentDidMount() {
		console.log("Home Component Mounted")
	}

	render() {
		if (this.state.user) {
			return (
				<div className="Home">
					<Header user={this.props.user} />
					<p>Current User:</p>
					<code>
						{JSON.stringify(this.props)}
					</code>
					<div>
					<OutlinedCard />
				</div>
				</div>
				
			)
		} else {
			return (
				<div className="Home">
					<Header user={this.props.user} />
					<p>Current User:</p>
					<code>
						{JSON.stringify(this.props)}
					</code>
					<div>
				</div>
				</div>
			)
		}
	}

}
