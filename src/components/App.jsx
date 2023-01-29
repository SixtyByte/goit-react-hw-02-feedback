import PropTypes from 'prop-types';
import React from "react";
import FeedbackOption from './FeedbackOptions/FeedbackOption';
import Section from './Section/Sections';
import Statistic from './Statistics/Statistics';
class App extends React.Component {
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
     <Section tittle={"Please leave feedback"}/>
 <FeedbackOption good={this.goodFeedback} bad={this.badFeedback} neutral={this.neutralFeedback} total={this.countTotalFeedback} percent={this.positivePercentage} onLeaveFeedback={0}/>

<Section tittle={"Statistic"}/>
<Statistic good={this.state.good} neutral={this.state.neutral}  bad={this.state.bad} total={this.state.total} positivePercentage={this.state.positivePercentage}/>
     </div>
    
   </div>}};

   export default App;
   
 
  