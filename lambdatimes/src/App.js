import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import tabData from '../src/data'
import cardData from '../src/data'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tabdata: [],
      carddata: []
    }
  }

  componentDidMount() {
    this.setState({
      tabdata: tabData,
      carddata: cardData
    })
  }

  render() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Content />
    </div>
  );
}
}

export default App;
