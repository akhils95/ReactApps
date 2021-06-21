import React, { Component } from "react";
import Header from "../Components/Header";
import CardList from "../Components/CardList";
import Scroll from "../Components/Scroll";
import Calculater from "../Components/Apps/Calculater/Calculater";
import CodeEditor from "../Components/Apps/CodeEditor/CodeEditor";
import ResumeBuilder from "../Components/Apps/ResumeBuilder/ResumeBuilder";
import FaceRecognition from "../Components/Apps/FaceRecognition/FaceRecognition";
import ChuckNorrisJokes from "../Components/Apps/ChuckNorrisJokes/ChuckNorrisJokes";
import RoboFriends from "../Components/Apps/RoboFriends/RoboFriends";
import "./App.css";

const initialState = {
  route: "Resume Builder",
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  render() {
    if (this.state.route === "home") {
      return (
        <div className="tc full">
          <Header onRouteChange={this.onRouteChange} />
          <Scroll>
            <CardList onRouteChange={this.onRouteChange} />
          </Scroll>
        </div>
      );
    }
    if (this.state.route === "Calculater") {
      return (
        <div className="tc full">
          <Header onRouteChange={this.onRouteChange} />
          <Scroll>
            <Calculater />
          </Scroll>
        </div>
      );
    }
    if (this.state.route === "Code Editor") {
      return (
        <div className="tc full">
          <Header onRouteChange={this.onRouteChange} />
          <Scroll>
            <CodeEditor />
          </Scroll>
        </div>
      );
    }
    if (this.state.route === "fr") {
      return (
        <div className="tc full">
          <Header onRouteChange={this.onRouteChange} />
          <Scroll>
            <FaceRecognition />
          </Scroll>
        </div>
      );
    }
    if (this.state.route === "Resume Builder") {
      return (
        <div className="tc full">
          <Header onRouteChange={this.onRouteChange} />
          <Scroll>
            <ResumeBuilder />
          </Scroll>
        </div>
      );
    }
    if (this.state.route === "RoboFriends") {
      return (
        <div className="tc full">
          <Header onRouteChange={this.onRouteChange} />
          <Scroll>
            <RoboFriends />
          </Scroll>
        </div>
      );
    }
    if (this.state.route === "ChuckNorris") {
      return (
        <div className="tc full">
          <Header onRouteChange={this.onRouteChange} />
          <Scroll>
            <ChuckNorrisJokes />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
