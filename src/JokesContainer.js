import React, { Component } from 'react';
import './JokesContainer.css'
import Joke from './Joke';
import axios from 'axios';
import Sidebar from './Sidebar';

class JokeContainer extends Component{
    static defaultProps = {
        numJokes: 8
    }

    constructor(props){
        super(props);
        this.state = {
            jokes:JSON.parse(window.localStorage.getItem('jokes') || '[]'),
            isLoading: window.localStorage.getItem('jokes')?false:true
        }
        this.getJokes = this.getJokes.bind(this);
    }

    async getJoke(){
        const response = await axios.get('https://icanhazdadjoke.com/',{headers:{Accept:'application/json'}});
        return response.data.joke;
    }

    getJokes(){
        this.setState(curState =>{return{isLoading: true}},async () => {
            const jokes = [];
            const {jokes:prevJokes} = this.state;
            while(jokes.length < this.props.numJokes){
                const joke = await this.getJoke();
                if(prevJokes.includes(joke)){
                    continue;
                }
                jokes.push(joke);
            }
            this.setState(curState => { return { jokes: jokes, isLoading:false}}, () =>{window.localStorage.setItem('jokes',JSON.stringify(this.state.jokes))});
        });
        }

    componentDidMount(){
        if(this.state.jokes.length===0){
            this.getJokes();
        }
    }

    render(){
        const {jokes, isLoading} = this.state;
        const jokeTags = jokes.map((text,i) => {return <Joke key={i} joke={text}/>});
        return(
            <div>{
                isLoading?
                <div className="loading">Loading&#8230;</div>
                :
                <div className="AppContainer">
                    <Sidebar getNewJokes={this.getJokes}/>
                    <div className="JokesContainer">{jokeTags}</div>
                </div>
                }
            </div>
                
        );
    }
};
export default JokeContainer;