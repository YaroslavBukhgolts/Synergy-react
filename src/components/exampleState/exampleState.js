import { Component } from "react";

class ExampleState extends Component {
    constructor(props){
        super(props)
        this.state = {
            num: 0,
        }
    }

    onHandleChange = (e) => {
        this.setState({
            num: this.state.num + 1,
        })
    }

    render(){
        let {num} = this.state; 
        return(
            <>
                <h1>ExampleState</h1>
                <div>
                    <input type="button" value="+++" onClick={e => this.onHandleChange(e)}></input>
                    <p>{num}</p>
                </div>
            </>
        )
    }
}

export default ExampleState;