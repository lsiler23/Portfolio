import React from 'react';
import Body from '../body/body';

export default class Header extends React.Component {
  constructor() {
    super()
    this.state = { selected: '1' }
    this.currentChoice = this.currentChoice.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  currentChoice(idx) {
    if (idx === this.state.selected) {
      return 'selected';
    } else {
      return '';
    }
  }

  handleToggle(idx) {
    return () => {
      this.setState({ selected: idx })
    };
  }

  render() {
    return (
      <div>
        <div className='header'>
          <div className='name-and-title'>
            <h1>Laurette Siler</h1>
            <h2>Software Developer</h2>
          </div>
          <div
            id='about-me'
            className={`about-header ${this.currentChoice('1')}`}
            onClick={this.handleToggle('1')}>About Me</div>
          <div
            id='projects'
            className={`about-header ${this.currentChoice('2')}`}
            onClick={this.handleToggle('2')}>Projects</div>
          <div
            id='contact'
            className={`about-header ${this.currentChoice('3')}`}
            onClick={this.handleToggle('3')}>Contact</div>
        </div>
        <Body current={this.state.selected}/>
      </div>
    );
  }
}
