import { Component } from 'react';
import ChangeBaseAbilityScores from './ChangeBaseAbilityScores';

class AbilityScores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: '', // change / show
    };
  }

  render() {
    if (Object.values(this.props.base_stats).every((x) => x === 10)) {
      return <ChangeBaseAbilityScores change={this.props.change_stats} />;
    }

    return Object.entries(this.props.base_stats).map(([key, val]) => {
      for (let x in this.props.stat_bonuses) {
        if (this.props.stat_bonuses[x].hasOwnProperty(key)) {
          val += this.props.stat_bonuses[x][key];
        }
      }
      return (
        <div>
          <h4>{key}</h4>
          <p>{val}</p>
        </div>
      );
    });
  }
}

export default AbilityScores;
