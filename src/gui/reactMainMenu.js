import React, { Component } from 'react';

function f(){
    console.log("works?");
}
export class MainMenu extends Component {
    howToPlay(){
        console.log("How to play not created yet");
    }
    fight(){
        console.log("Fight!");
        console.log(this);
        this.props.controller.view = 9;
        this.props.controller.forceUpdate();
    }
    teamBuilder(){
        console.log("Buid teams");
    }
    info(){
        console.log("Info not created yet");
    }
    
    render(){
        return (
            <div className="MainMenu">
                <div className="MainMenuItem" id="HowToPlayButton" onClick={this.howToPlay.bind(this)}>
                    <p> How to Play </p>
                </div>
                <div className="MainMenuItem" id="FightButton" onClick={this.fight.bind(this)}>
                    <p> Fight! </p>
                </div>
                <div className="MainMenuItem" id="TeamBuilderButton" onClick={this.teamBuilder.bind(this)}>
                    <p> Teambuilder </p>
                </div>
                <div className="MainMenuItem" id="InfoButton" onClick={this.info.bind(this)}>
                    <p> Info </p>
                </div>
            </div>
        );
    }
}