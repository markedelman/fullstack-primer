import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/cheese';


export class CheeseList extends React.Component {


  componentDidMount() {
    this.props.dispatch(actions.fetchCheeses());
  }
render(){
  const cheeseArray = this.props.cheeses.map((cheese, index) => {
    return <li key={index}>{cheese}</li>;

  });
  return (
        <ul>
          {cheeseArray}
        </ul>

  );
}
}
const mapStateToProps = (state, props) => {
  return{
    cheeses: state.cheeses
  };

};

export default connect(mapStateToProps)(CheeseList);
