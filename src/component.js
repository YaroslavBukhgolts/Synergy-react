import { Component } from "react";
import PropTypes from 'prop-types';

class Greet extends Component {
    render(){
        const {age, name} = this.props;
        return(
            <h1>Hello world! My name is {name} age is {age}</h1>
        );
    };
};

Greet.propTypes = {
    age: PropTypes.number,
    name: PropTypes.string
};

export default Greet;