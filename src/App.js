import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('BirdStore')
@observer
class App extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    const bird = this.bird.value;

    this.props.BirdStore.addBird(bird);
    this.bird.value = '';
  }

  render() {
    const { BirdStore } = this.props;

    return (
      <div className="App">
        <h2>You have {BirdStore.birdCount} birds.</h2>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter bird"
            ref={input => this.bird = input} />
          <button>Add bird</button>
        </form>

        <ul>
          {
            BirdStore.birds.map(bird => (
              <li key={bird}>{bird}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
