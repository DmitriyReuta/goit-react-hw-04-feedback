import React, { useState } from "react";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";

export function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const incrementFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1
    }));
  };

  const totalFeedback = () => {
    const { good, bad, neutral } = feedback;
    return good + bad + neutral;
  };

  const countPositiveFeedbackPer = () => {
    const total = totalFeedback();
    const { good } = feedback;
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  const totalFeedbackOne = totalFeedback();
  const percent = countPositiveFeedbackPer();

  return (
    <div className="App">
      <Section title="Leave Feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={incrementFeedback} />
      </Section>
      {totalFeedbackOne > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedbackOne}
            percent={percent}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}

