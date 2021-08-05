import React, { Component } from 'react';
import './Joke.css';

class Joke extends Component{
    static defaultProps = {
        emojis:['😖','😑','🙂','😆','🤣']
    }

    constructor(props){
        super(props);
        this.state = {
            votes:0,
            emoji: this.props.emojis[2]
        }
        this.handleUpVote = this.handleUpVote.bind(this);
        this.handleDownVote = this.handleDownVote.bind(this);
        this.getEmoji = this.getEmoji.bind(this);
    }

    handleUpVote(){
        this.setState(curState => {return {votes:curState.votes+1, emoji: this.getEmoji()}});
    }

    handleDownVote(){
        this.setState(curState => {return {votes:curState.votes-1, emoji: this.getEmoji()}});
    }

    getEmoji(){
        const {votes} = this.state;

        if(votes >= 10){
            return this.props.emojis[4];
        }else if(votes <=10 && votes>=5){
            return this.props.emojis[3];
        }else if(votes >= 0 && votes <=5){
            return this.props.emojis[2];
        }else if(votes <=0 && votes >= -5){
            return this.props.emojis[1];
        }else{
            return this.props.emojis[0];
        }
    }

    getColor(){
        const {votes} = this.state;
        if(votes >= 10){
            return "#00FF00";
        }else if(votes <=10 && votes>=5){
            return "rgb(100,255,190)";
        }else if(votes >= 0 && votes <=5){
            return "rgb(50,35, 151)";
        }else if(votes <=0 && votes >= -5){
            return "rgb(255,255,190)";
        }else{
            return "rgb(255, 0, 0)";
        }
    }


    render(){
        return(
            <div className="Joke">
                <i className="fas fa-arrow-up fa-2x" onClick={this.handleUpVote}></i>
                <span className="rating-emoji">{this.state.emoji}</span>
                <i onClick={this.handleDownVote} className="fas fa-arrow-down fa-2x"></i> 
                <p className="joke-text">{this.props.joke}</p>
                <p className="votes" style={{borderColor:this.getColor()}}>{this.state.votes}</p>
            </div>
        )
    }
};

export default Joke;