import React from "react";

const Statistic=({good,neutral,bad,total,positivePercentage})=>( <ul class="stats">
       <li>
         <span class="label">Good:</span>
         <span class="quantity">{good}</span>
       </li>
       <li>
         <span class="label">Neutral:</span>
         <span class="quantity"> {neutral}</span>
       </li>
       <li>
         <span class="label">Bad:</span>
         <span class="quantity"> {bad}</span>
       </li>
       <li>
         <span class="label">Total:</span>
         <span class="quantity"> {total||0}</span>
       </li>
       <li>
         <span class="label">Positive feedback:</span>
         <span class="quantity"> {positivePercentage||0}%</span>
       </li>
     </ul>);
export default Statistic