import React from "react"

class Statistics extends React.Component {
 state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
goodFeedback=()=>{this.setState((prevState)=>{return{good:prevState.good+1}})};

neutralFeedback=()=>{this.setState((prevState)=>{return{neutral:prevState.neutral+1}})};
badFeedback=()=>{this.setState((prevState)=>{return{bad:prevState.bad+1}})}
countTotalFeedback=()=>{ this.setState((prevState)=>{return{total:prevState.good+prevState.neutral+prevState.bad}})}

   render(){ return <div class="profile">
    <div class="description">
    <h1>Please leave feedback</h1>
   <button type="button" onClick={this.goodFeedback}  className="control">Good</button>
   <button type="button" className="control" onClick={this.neutralFeedback}>Neutral</button>
   <button type="button" className="control" onClick={this.badFeedback}>Bad</button>
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
        <span class="label">Total</span>
        <span class="quantity"> {this.state.total}</span>
      </li>
      <li>
        <span class="label">Positive feedback:</span>
        <span class="quantity"> 0%</span>
      </li>
    </ul>
  </div>}};
  

  export default Statistics