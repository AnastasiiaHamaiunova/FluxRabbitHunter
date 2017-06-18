import React from 'react';

export default class Hunter extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            x: 0,
            y: 0
        }

        this.updateState = this.updateState.bind(this);
    }

    updateState(){
        this.setState({x: this.props.store.x, y: this.props.store.y});
    }
    
    componentWillMount(){
        this.props.store.addView(this.updateState);
    }

    componentWillUnmount(){
        this.props.store.removeView(this.updateState);
    }

    render(){
        return(
            <div className="hunter">
                <span>Hunter:</span>
                {this.state.x};{this.state.y}
            </div>
        )
    }
}