import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './addPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Ihsan",
        score: 0,
        id: 1
      },
      {
        name: "Agatha",
        score: 0,
        id: 2
      },
      {
        name: "Coklat",
        score: 0,
        id: 3
      },
      {
        name: "Gata",
        score: 0,
        id: 4
      }
    ]
  };

  // player id counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
   
  }

handleAddPlayer = (name) => {
  this.setState( prevState => 
    {
      return {
    players: [
      ...prevState.players,
      {
        name: name,
        score: 0,
        id: this.prevPlayerId += 1
      }
    ]
  }
  });
}

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  getHighScore = () => {
    const score = this.state.players.map( p => p.score);
    const highScore = Math.max(...score);
    if (highScore) {
      return highScore
    }
    return null;
  }

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()} 
            index= {index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}     
            isHighScore = {this.highScore === player.score}      
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
