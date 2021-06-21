import React, {Component} from 'react';
import Header from "./Components/Header";
import Thread from './Components/Thread';
import './ChuckNorris.css';
import ErrorBoundary from './Components/ErrorBoundary';

class ChuckNorrisJokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      card: {},
      refreshPage: false
    };
  }

  componentDidMount() {
    this.fetchJoke();
  }
  
  fetchJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response=> response.json())
      .then(joke => {this.setState({ card : joke })});
  }

  render() {
  return (
      <div className='vh-100 dt w-100 bg-orange'>  
        <Header />
        <ErrorBoundary>
          <Thread card={this.state.card} />
        </ErrorBoundary>
        <p>{this.state.isFetching ? 'Loading Joke...' : ''}</p>
        <div className='center'>
        <button className='ma4 f6 link dim ba b--near-black br3 bw1 ph3 pv2 mb2 dib black bg-blue pointer' onClick={this.fetchJoke}>Next Joke</button>
        </div>
      </div> 
  )}
}

export default ChuckNorrisJokes;
