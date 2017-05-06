import React from 'react';
import { DefaultArtists } from '../default-artists';
import Header from './Header';

export default class Artist extends React.Component {
	constructor(props) {
		super(props);
		this.state = {color: 'red',
		artists: DefaultArtists
		};
	}

	addArtist() {
		if (this.newArtist.value === '') {
			return;
		}
		const newArtist = {name: this.newArtist.value, edit: false}
		this.newArtist.value = '';
		const myArtists = this.state.artists.slice();
		myArtists.push(newArtist);
		this.setState({artists: myArtists});
	}

	editArtist(event) {
		const myArtists = this.state.artists.slice();
		for (let i = 0; i < this.state.artists.length; i++) {
			this.state.artists[i].edit = false;
		}
		const id = event.target.dataset.reactid[6];
		myArtists[id].edit = true;
		this.setState({artists: myArtists});

	}

	deleteArtist(event) {
		const id = event.target.dataset.reactid[6];
		const myArtists = this.state.artists.slice();
		myArtists.splice(id, 1);
		this.setState({artists: myArtists});
	}

	renderArtists(artist) {
		if (artist.edit === true) {
			return ( <div>
					<input type="text" placeholder={artist.name} ref={(input) => this.changes = input} />
					<button onClick={this.saveChange.bind(this)}>Save</button>
					</div>
					);
		} else {
			return ( <div>{artist.name}</div> );
		}
	}

	saveChange(event) {
		const id = event.target.dataset.reactid[6];

		if (this.changes.value === '') {
			this.state.artists[id].edit = false;
			const myArtists = this.state.artists.slice();
			this.setState({artists: myArtists});
			return;
		}

		const newArtist = {name: this.changes.value, edit: false};
		const myArtists = this.state.artists.slice();
		myArtists.splice(id, 1, newArtist);
		this.setState({artists: myArtists});
	}

	render() {
		return (
			<div>
				<Header />
				<input type="text" placeholder="Enter new artist..." ref={(input) => this.newArtist = input} />
				<button onClick={this.addArtist.bind(this)}>Add artist</button>
				{this.state.artists.map((artist, index) => <div key={index}>{this.renderArtists(artist)}
					<button onClick={this.editArtist.bind(this)}>Edit</button>
					<button onClick={this.deleteArtist.bind(this)}>Delete</button>
				</div>)}
			</div>
		);
	}
}
