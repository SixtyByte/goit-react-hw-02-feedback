import React from "react"
import PropTypes from 'prop-types';
class Statistics extends React.Component {
 static defaultProps={good:0,total:0, bad:0,neutral:0, positivePercentage:0
};

  state = {
good:this.props.good,
neutral:this.props.neutral,
bad:this.props.bad

  };
  static PropsTypes={good:PropTypes.number,bad:PropTypes.number,neutral:PropTypes.number,positivePercentage:PropTypes.number}
 
 
goodFeedback=()=>{this.setState((prevState)=>{return{good:prevState.good+1}})};

neutralFeedback=()=>{this.setState((prevState)=>{return{neutral:prevState.neutral+1}})};
badFeedback=()=>{this.setState((prevState)=>{return{bad:prevState.bad+1}})}
countTotalFeedback=()=>{this.setState((prevState)=>{ return {total:prevState.good+prevState.neutral+prevState.bad, } })}
positivePercentage=()=>{this.setState((prevState)=>{return {positivePercentage:Math.round((prevState.good/(prevState.good+prevState.neutral+prevState.bad)*100))}})}
   render(){ return <div class="profile">
     
    <div class="description">
    <h1>Please leave feedback</h1>
   <button type="button" onClick={()=>{this.goodFeedback();this.countTotalFeedback();this.positivePercentage()}}  className="control">Good</button>
   <button type="button" className="control" onClick={()=>{this.neutralFeedback();this.countTotalFeedback();this.positivePercentage()}}>Neutral</button>
   <button type="button" className="control" onClick={()=>{this.badFeedback();this.countTotalFeedback();this.positivePercentage()}}>Bad</button>
    </div>
    <ul class="stats">
      <li>
        <span class="label">Good:</span>
        <span class="quantity">{this.state.good}</span>
      </li>
      <li>
        <span class="label">Neutral:</span>
        <span class="quantity"> {this.state.neutral}</span>
      </li>
      <li>
        <span class="label">Bad</span>
        <span class="quantity"> {this.state.bad}</span>
      </li>
      <li>
        <span class="label">Total:</span>
        <span class="quantity"> {this.state.total || this.props.total}</span>
      </li>
      <li>
        <span class="label">Positive feedback:</span>
        <span class="quantity"> {this.state.positivePercentage||this.props.positivePercentage}%</span>
      </li>
    </ul>
  </div>}};
  

  export default Statistics