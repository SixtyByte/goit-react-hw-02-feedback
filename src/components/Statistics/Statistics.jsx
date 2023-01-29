import React from "react";

const Statistic=({options,onLeaveFeedback})=>( <ul class="stats">
       <li>
         <span class="label">Good:</span>
         <span class="quantity">{this.state.good}</span>
       </li>
       <li>
         <span class="label">Neutral:</span>
         <span class="quantity"> {this.state.neutral}</span>
       </li>
       <li>
         <span class="label">Bad:</span>
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
     </ul>);
export default Statistic