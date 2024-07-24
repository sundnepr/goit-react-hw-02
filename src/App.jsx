import { useState, useEffect } from "react";
import "./App.css";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

const App = () => {
  const [stan, setStan] = useState(() => {
    // const savedStan = null;
    // const
    const savedStan = JSON.parse(window.localStorage.getItem("saved-stan"));

    const defaultStan = { good: 0, neutral: 0, bad: 0 };
    return savedStan !== null ? savedStan : defaultStan;
  });

  const totalFeedback = stan.good + stan.neutral + stan.bad;
  const totalPositive = Math.round((stan.good / totalFeedback) * 100);

  useEffect(() => {
    window.localStorage.setItem("saved-stan", JSON.stringify(stan));
  }, [stan]);

  const updateFeedback = (feedbackType) => {
    setStan((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
    {
      feedbackType === "reset" ? updateReset() : "";
    }
  };

  const updateReset = () => {
    setStan({
      ...stan,
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <div>
        <Description />
        <Options
          updateFeedback={updateFeedback}
          total={totalFeedback}
          updateReset={updateReset}
        />
        <Feedback
          good={stan.good}
          neutral={stan.neutral}
          bad={stan.bad}
          totalFeedback={totalFeedback}
          totalPositive={totalPositive}
        />
      </div>
    </>
  );
};

export default App;
