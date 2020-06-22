import React, {Component} from 'react';
import QuoteMachine from './components/QuoteMachine';
import {random} from 'lodash';
import 'typeface-roboto';
import {Grid, withStyles} from '@material-ui/core';

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center'
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quotes: [],
      quoteIndex: null,
    }
    this.newQuoteIndex = this.newQuoteIndex.bind(this);
    this.randomQuoteIndex = this.randomQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
    .then(data => data.json())
    .then(quotes => this.setState({quotes}, this.newQuoteIndex));
  }

  get randomisedQuote() {
    if(!this.state.quotes.length || !Number.isInteger(this.state.quoteIndex)){
      return null;
    }
    return this.state.quotes[this.state.quoteIndex];
  }

  randomQuoteIndex(){
    if(!this.state.quotes.length){
      return null;
    }
    return random(0, this.state.quotes.length-1);
  }

  newQuoteIndex() {
    this.setState({quoteIndex: this.randomQuoteIndex()});
  }

  render(){
    console.log(this.state.quoteIndex)
    return (
      <Grid className={this.props.classes.container} id = "quote-box" justify = "center" container>
        <Grid xs={11} lg = {4} item>
          {
            this.randomisedQuote ? <QuoteMachine randomisedQuote = {this.randomisedQuote} newQuoteIndex = {this.newQuoteIndex}/> : null
          }
        
        </Grid> 
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
