import React, { Component } from 'react';
import AbilityScores from './AbilityScores';

class CharacterSheet extends Component {
  constructor() {
    super();
    this.state = {
      base_stats: { INT: 10, STR: 10, CON: 10, DEX: 10, WIS: 10, CHA: 10 },
      stat_bonuses: { race: {}, level: {}, feats: {} },
      ability_increases: {},
      ability_proficiences: {},
      level: {},
    };
    this.change_stats = this.change_stats.bind(this);
  }

  change_stats(stats) {
    this.setState({ base_stats: stats });
  }

  render() {
    return (
      <AbilityScores
        stat_bonuses={this.state.stat_bonuses}
        change_stats={this.change_stats}
        base_stats={this.state.base_stats}
      />
    );
  }
}

export default CharacterSheet;
