import React from 'react';

export default class Rabbit extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            x: 0,
            y: 0
        }     
    }

    changePosition(){
        let x = Math.floor((Math.random() * 800) + 1);
        let y = Math.floor((Math.random() * 800) + 1);

        this.setState({x, y});

        this.props.dispatcher.dispatch({
            eventType: "CHANGE_POSITION",
            x,
            y
        });
    }

    componentDidMount(){
        setInterval(() =>{
            this.changePosition();
        }, 1000);
    }
    render() {
        return(
            <div>
                <div className='rabbit'
                style={{top: this.state.y + 'px', 
                        left: this.state.x + 'px'}}>
                </div>
                <div className='rabbit-position'>
                    <span>Rabbit:</span>
                    {this.state.x};{this.state.y}
                </div>
            </div>
        );
    }
}