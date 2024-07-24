import css from "./Option.module.css"

const Options = ({ updateFeedback, total , updateReset}) => {

  return (
    <div>
      <button className={css.btn} onClick={() => updateFeedback("good")}>Good</button>
      <button className={css.btn} onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button className={css.btn} onClick={() => updateFeedback("bad")}>Bad</button>
      {total > 0 && (<button className={css.btn} onClick={updateReset}>Reset</button>)}
    
    </div>
  );
};

export default Options;
