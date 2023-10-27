import { Component } from "react";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  incrementFeedback = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1
    }))
  }

  totalFeedback = () => {
    const { good, bad, neutral } = this.state
    return good + bad + neutral
    
  }

  countPositiveFeedbackPer = () => {
    const total = this.totalFeedback();
    const { good } = this.state
    return total > 0 ? Math.round((good / total) * 100) : 0;
  }

  render() {
    const totalFeedbackOne = this.totalFeedback();
    const percent = this.countPositiveFeedbackPer();

    return (
      <div className="App">
        <Section title="Leave Feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.incrementFeedback} />
        </Section>
        {totalFeedbackOne > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedbackOne}
              percent={percent}>

            </Statistics>
          </Section>
        ) : (
            <Notification message="There is no feedback"/>
        )}
      </div>
    )
  }
}