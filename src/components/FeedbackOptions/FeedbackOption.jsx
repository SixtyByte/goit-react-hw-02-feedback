import React from "react";

const FeedbackOption=({good, bad, neutral, total, percent,onLeaveFeedback})=>(<div className="contol"><button type="button" onClick={()=>{good();total();percent()}}  className="control">Good</button>
<button type="button" className="control" onClick={()=>{neutral();total();percent()}}>Neutral</button>
<button type="button" className="control" onClick={()=>{bad();total();percent()}}>Bad</button></div>);
export default FeedbackOption