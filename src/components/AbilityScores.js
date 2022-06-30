import { Component } from 'react';

function randomNumberBetween1and6() {
  return Math.floor(Math.random() * 6) + 1;
}
function roll4d6d1() {
  const arr = [0, 0, 0, 0].map((x) => randomNumberBetween1and6()).sort();
  return arr[1] + arr[2] + arr[3];
}

class AbilityScores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: { INT: 10, STR: 10, CON: 10, DEX: 10, WIS: 10, CHA: 10 },
      class: '',
      race: '',
    };
  }

  render() {}
}

export default AbilityScores;
