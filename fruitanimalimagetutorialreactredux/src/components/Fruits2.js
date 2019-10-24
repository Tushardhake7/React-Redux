import React from 'react'
import { connect } from 'react-redux';
import fruitAction from '../actions/myaction';
import { bindActionCreators } from 'redux';
//import '../common.css'
import '../fruits.css'

const Fruits2 = (props) => {
    const {
        myFruits: {
            fruits = [], 
        } = {}, 
    } = props;

    return ( 

<ul className="fruitlist">
        { 
            fruits.map(item =>
            <li>
            <span className="fruitBox">
    
            <img className="fruitBox-img" 
                 src={item.ImageURLs.Thumb} 
                 alt={item.Title}/>

        <span className="fruitText">
        <h5> {item.Title} </h5>
    </span>
    </span>
            </li>
        )}
        </ul>
     );
}
 
const mapStateToProps = (state) => {
    return {
    myFruits: state.fruits,
    }
}

  const mapDispachToProps = (dispatch) => {
    return {
      changeFruit: dispatch(fruitAction()),
    }
  }

export default connect(mapStateToProps, mapDispachToProps)(Fruits2);
