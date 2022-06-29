import React, { Component } from 'react';

function randomNumberBetween1and6() {
  return Math.floor(Math.random() * 6) + 1;
}
function roll4d6d1() {
  const arr = [0, 0, 0, 0].map((x) => randomNumberBetween1and6()).sort();
  return arr[1] + arr[2] + arr[3];
}

class CharacterSheet extends Component {
  constructor() {
    super();
    this.state = {
      base: { INT: 10, STR: 10, CON: 10, DEX: 10, WIS: 10, CHA: 10 },
      valuesToAssign: { stats: [] },
      phase: 'begin',
    };
  }

  render() {
    switch (this.state.phase) {
      case 'begin':
        return (
          <div>
            <p>Ready to start?</p>
            <button>Generate random stats</button>
          </div>
        );
    }
  }
}

export default CharacterSheet;
