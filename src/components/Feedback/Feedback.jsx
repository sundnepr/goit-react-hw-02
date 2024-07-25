const Feedback = ({ good, neutral, bad, totalFeedback, totalPositive }) => {
  return (
    <div>
      <>
        <p>Good : {good}</p>
        <p>Neutral : {neutral}</p>
        <p>Bad : {bad}</p>
        <p>Total : {totalFeedback}</p>
        <p>Positive : {totalPositive}%</p>
      </>

      {/* {totalPositive > 0 ? (<p>Positive : {totalPositive}%</p>):("")} */}
    </div>
  );
};

export default Feedback;
