import React from "react";

class Eight extends React.Component {
    count = 20;


    constructor() {
        super();
        this.state = {
             number: 1
        }
        console.log("Constructor called!");
    }
    componentDidMount() {
        console.log("Mounted");
        console.log(this.count+1);
        console.log(this.count+1);
        console.log(this.state.number+1);
    }
    componentDidUpdate(){
        console.log("updated");
        
    }
    componentWillUnmount() {
        console.log("UnMounted");   
    }

    funBtnClick = () =>{
        console.log("clicked");
        console.log(this.count+1);
        this.setState({number : this.state.number+1})
        
    }
    render() {
        return (
            <div>
            <h1>This is class variable count = {this.count} , {this.state.number}</h1>
            <button className = "btn btn-primary" onClick={this.funBtnClick}>Click Me</button>
            </div>
        );
    }
}
export default Eight;