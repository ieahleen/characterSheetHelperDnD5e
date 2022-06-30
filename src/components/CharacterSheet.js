import React, { Component } from 'react';
import AbilityScores from './AbilityScores';

class CharacterSheet extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    <AbilityScores stats={this.state.stats} />;
  }
}

export default CharacterSheet;
