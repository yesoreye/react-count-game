import React, { Component } from "react";
import "./Board.css"


class Board extends React.Component {
    constructor(){
        super();
        this.state = {
            score : 0,
            current_puzzle : {
                choices : [
                    {
                        text : "Hello"
                    },                    
                    {
                        text : "Hlleo"
                    },                    
                    {
                        text : "Hlelo"
                    },                    
                    {
                        text : "Lelho"
                    }
                ]
            }
        }
    }
    getSuffuledChoices() {
        let returnArray = [].concat(this.state.current_puzzle.choices);
        for (let i = returnArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [returnArray[i], returnArray[j]] = [returnArray[j], returnArray[i]];
        }
        return returnArray;

    }
    modifyScore(newScore){    
        this.setState({
            score : newScore
        });          
    }
    answer(answer){
        var { score, current_puzzle } = this.state;
        console.log(score);
        if(answer.text=== current_puzzle.choices[0].text){
            console.log("Correct. Score will be incrmented");
            this.modifyScore(score++)
        }
        else {
            console.log("Oops. Score will be decreased");
            this.modifyScore(score--)
        }
    }
    render() {
        var choices = this.getSuffuledChoices().map((c,i)=>{
            return <div key={i} className="choice" onClick={this.answer.bind(this,c)}>
                <h2>{c.text.toUpperCase()}</h2>
            </div>
        })
        return ( 
            <div className="Container">
                <div className="row text-center m-4">
                    <div className="col-md-12">
                        <h4>Score : {this.state.score}</h4>
                    </div>
                </div>
                <div className="row text-center m-4">
                    <div className="col-md-12">
                        <h2 id="question">TEXT : {this.state.current_puzzle.choices[0].text.toUpperCase()}</h2>
                    </div>
                </div>                
                <div className="row text-center">
                    <div className="col-md-12 choices">
                        {choices}
                    </div>
                </div>
            </div>
        )
    }
}

export default Board