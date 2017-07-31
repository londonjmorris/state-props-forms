import React, { Component } from 'react';
import '../styles/App.css';

import NavBar from './NavBar.js';
import PlayList from './PlayList.js';
import PlayListForm from './PlayListForm.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    }
    this.update = this.update.bind(this);
  }

  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
    });
  }

  update(event) {
    event.preventDefault();
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({ songs: data });
    });
  }

  addSong(event) {
    event.preventDefault();

    let listItem = JSON.stringify({
        userName: event.target.userName.value,
        songTitle: event.target.songTitle.value,
        songArtist: event.target.songArtist.value,
        songNotes: event.target.songNotes.value
    });

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "posted");

    }).catch(err => {
      console.log(err, "failed");
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="row">
          <PlayListForm addSong={this.addSong} />
          <PlayList songs={this.state.songs}  update={this.update} />
        </div>
      </div>
    );
  }
}

export default App;
