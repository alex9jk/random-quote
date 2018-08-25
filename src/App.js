import React, { Component } from 'react';
import Quote from './Quote'

const api = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
let quotesData;

var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            

        }
        this.fetchQuotes = this.fetchQuotes.bind(this)
    }

    componentWillMount() {
        fetch(api)
            .then(res => res.json())
            .then(

                (result) => {
                    quotesData = result;
                    console.log(quotesData)
                    var num = Math.floor(Math.random() * quotesData.quotes.length);
                    var color = Math.floor(Math.random() * colors.length);
                    document.getElementsByTagName('html')[0].style.backgroundColor = colors[color];
                    this.setState({
                        isLoaded: true,
                        data: quotesData,
                        randQuote: quotesData.quotes[num].quote,
                        randAuth: quotesData.quotes[num].author,
                        color:colors[color]
                    });
                    console.log(this.state);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    fetchQuotes() {
        var color = Math.floor(Math.random() * colors.length);
        var ran = Math.floor(Math.random() * quotesData.quotes.length);
        this.setState({
            randQuote: quotesData.quotes[ran].quote,
            randAuth: quotesData.quotes[ran].author,
            color: colors[color]
        })
        document.getElementsByTagName('html')[0].style.backgroundColor = colors[color];
    }

    render() {
        return (
            <div style={{ backgroundColor: this.state.color }}>
                <Quote color={this.state.color} quote={this.state.randQuote} author={this.state.randAuth} handleClick={this.fetchQuotes} />
            </div>

        )

    }
}
export default App;