const Feedback = ({ good, neutral, bad, totalFeedback, totalPositive }) => {
  console.log(totalFeedback);
  console.log(totalPositive);

  return (
    <div>
      {totalFeedback === 0 ? (
        "No feedback yet"
      ) : (
        <>
          <p>Good : {good}</p>
          <p>Neutral : {neutral}</p>
          <p>Bad : {bad}</p>
          <p>Total : {totalFeedback}</p>
        </>
          )}
    {totalPositive > 0 ? (<p>Positive : {totalPositive}%</p>):("")}

 
    </div>
  );
};

export default Feedback;
