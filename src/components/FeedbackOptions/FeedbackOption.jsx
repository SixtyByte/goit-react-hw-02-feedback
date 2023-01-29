import React from "react";

const FeedbackOption=({options,onLeaveFeedback})=>(<div className="contol"><button type="button" onClick={()=>{this.goodFeedback();this.countTotalFeedback();this.positivePercentage()}}  className="control">Good</button>
<button type="button" className="control" onClick={()=>{this.neutralFeedback();this.countTotalFeedback();this.positivePercentage()}}>Neutral</button>
<button type="button" className="control" onClick={()=>{this.badFeedback();this.countTotalFeedback();this.positivePercentage()}}>Bad</button></div>);
export default FeedbackOption