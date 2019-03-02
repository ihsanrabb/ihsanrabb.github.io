import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {
  static propTypes = {
    changeScore: propTypes.func,
    removePlayer: propTypes.func,
    name: propTypes.string.isRequired,
    score: propTypes.number.isRequired,
    id: propTypes.number,
    index: propTypes.number
  };

  render(){
    
    console.log(this.props.name + ' rendered');
    const {removePlayer, name,score,index,changeScore, id} = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          <Icon isHighScore={this.props.isHighScore} />
          { name }
        </span>
  
        <Counter 
          score={score}
          index={index}
          changeScore={changeScore}
        />
      </div>
    );
  }
  
  }

  export default Player;