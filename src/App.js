import React, { Component } from 'react';
import './css/App.css';
import IntroductionContainer from './containers/IntroductionContainer';
import SkillsContainer from './containers/SkillsContainer';
import GalleryContainer from './containers/GalleryContainer';
import ExperienceContainer from './containers/ExperienceContainer';

class App extends Component {
  render() {
    return (
      <>
        <IntroductionContainer></IntroductionContainer>
        <div className="home-skillsAndExperience">
          <SkillsContainer></SkillsContainer>
          <ExperienceContainer></ExperienceContainer>
        </div>
        <GalleryContainer></GalleryContainer>
      </>
    );
  }
}

export default App;