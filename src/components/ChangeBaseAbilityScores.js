import { Component } from 'react';

function randomNumberBetween1and6() {
  return Math.floor(Math.random() * 6) + 1;
}
function roll4d6d1() {
  const arr = [0, 0, 0, 0].map((x) => randomNumberBetween1and6()).sort();
  return arr[1] + arr[2] + arr[3];
}

class ChangeBaseAbilityScores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: 0,
      valuesToAssign: [],
      stats: { INT: 0, STR: 0, CON: 0, DEX: 0, WIS: 0, CHA: 0 },
    };
    this.roll = this.roll.bind(this);
    this.assign = this.assign.bind(this);
    this.chooseSet = this.chooseSet.bind(this);
    this.deselect = this.deselect.bind(this);
  }
  roll() {
    this.setState({
      valuesToAssign: [
        roll4d6d1(),
        roll4d6d1(),
        roll4d6d1(),
        roll4d6d1(),
        roll4d6d1(),
        roll4d6d1(),
      ].sort((a, b) => a - b),
      phase: 1,
    });
  }

  chooseSet() {
    this.setState({
      phase: 2,
    });
  }

  assign(k, value) {
    this.setState((prevState) => {
      const numbers = prevState.valuesToAssign.slice();
      numbers.splice(numbers.indexOf(parseInt(value)), 1);
      return {
        valuesToAssign: numbers,
        stats: { ...prevState.stats, [k]: parseInt(value) },
      };
    });
  }

  deselect(e) {
    const buttonClicked = e.target.value;
    const [key, value] = buttonClicked.split('-');
    this.setState((prevState) => ({
      valuesToAssign: [...prevState.valuesToAssign, parseInt(value)].sort(
        (a, b) => a - b
      ),
      stats: { ...prevState.stats, [key]: 0 },
    }));
  }
  render() {
    if (this.state.phase === 0) {
      return <button onClick={this.roll}>Roll</button>;
    } else if (this.state.phase === 1) {
      return (
        <>
          <ul>
            {this.state.valuesToAssign.map((number, i) => (
              <li key={number + '-' + i}>{number}</li>
            ))}
          </ul>
          <button onClick={this.roll}>Roll Again</button>
          <button onClick={this.chooseSet}>Use This</button>
        </>
      );
    } else if (this.state.phase === 2) {
      return (
        <>
          {Object.entries(this.state.stats).map(([key, value]) => {
            if (value === 0) {
              return (
                <>
                  <label key={'label-' + key} htmlFor={key}>
                    {key}
                  </label>
                  <select
                    key={'select-' + key}
                    id={key}
                    onChange={(event) => this.assign(key, event.target.value)}
                  >
                    <option value="0">---</option>
                    {this.state.valuesToAssign.map((v) => (
                      <option value={v}>{v}</option>
                    ))}
                  </select>
                </>
              );
            } else {
              return (
                <>
                  <button
                    key={'button-' + key}
                    value={key + '-' + value}
                    onClick={this.deselect}
                  >
                    {key}: {value}
                  </button>
                </>
              );
            }
          })}
          {this.state.valuesToAssign.length === 0 ? (
            <fieldset>
              <button onClick={() => this.props.change(this.state.stats)}>
                Save
              </button>
            </fieldset>
          ) : null}
        </>
      );
    }
    // chose method of changing ability scores
    // <RollBaseAbilityScors OR PointBuyBaseAbilityScores OR StandardArrayBaseAbilityScores>
  }
}

export default ChangeBaseAbilityScores;
