import React, { Component } from 'react';
import './style.css'

class List extends Component {

  constructor(props){
    super(props)

    this.state = { one: [], two: [], three: [], entryOne: "", entryTwo: "", entryThree: "" };

    this.handleSubmitOne = this.handleSubmitOne.bind(this);
    this.handleSubmitTwo = this.handleSubmitTwo.bind(this);
    this.handleSubmitThree = this.handleSubmitThree.bind(this);

    this.handleLeft = this.handleLeft.bind(this);
  }

  sectionOne(){
    return <div className='first-section'>
        <p className='title'>First</p>
        <form>
          <input type="text" value={this.state.entryOne} onChange={this.handleInputOne()} className='input-field'/>
        <button onClick={this.handleSubmitOne} className='submit-button'>X</button>
        </form>
        <ul className='list-container'>
          {this.state.one.map((el) => <li>
          {el}<button onClick={this.handleLeft}>X</button></li>)}
        </ul>
      </div>;
  }

  handleLeft(e){
    console.log(e.target.value)
  }

  sectionTwo() {
    return <div className="second-section">
        <p className="title">Second</p>
        <form>
        <input type="text" value={this.state.entryTwo} onChange={this.handleInputTwo()} className='input-field'/>
        <button onClick={this.handleSubmitTwo} className='submit-button'>X</button>
        </form>
        <ul className='list-container'>
          {this.state.two.map(el => <li>{el}</li>)}
        </ul>
      </div>;
  }

  sectionThree() {
    return <div className="third-section">
        <p className="title">Third</p>
        <form>
        <input type="text" value={this.state.entryThree} onChange={this.handleInputThree()} className='input-field'/>
          <button onClick={this.handleSubmitThree} className='submit-button'>X</button>
        </form>
        <ul className='list-container'>
          {this.state.three.map(el => <li>{el}</li>)}
        </ul>
      </div>;
  }

  handleSubmitOne(e){
    e.preventDefault();
    this.setState({one: this.state.one.concat(this.state.entryOne)});
    this.setState({entryOne: ""});
  }

  handleSubmitTwo(e) {
    e.preventDefault();
    this.setState({ two: this.state.two.concat(this.state.entryTwo) });
    this.setState({ entryTwo: "" });
  }

  handleSubmitThree(e) {
    e.preventDefault();
    this.setState({ three: this.state.three.concat(this.state.entryThree) });
    this.setState({ entryThree: "" });
  }

  handleInputOne(){
    return (e => {
      this.setState({ entryOne: e.target.value });
    });
  }

  handleInputTwo() {
    return (e => {
      this.setState({ entryTwo: e.target.value });
    });
  }

  handleInputThree() {
    return (e => {
      this.setState({ entryThree: e.target.value });
    });
  }

  render() {
    return <div className="main">
        {this.sectionOne()}
        {this.sectionTwo()}
      {this.sectionThree()}
      </div>;
  }
}

export default List;