import "./app.scss";

import Card from "./components/Card";
import cards from "./data/cards";

function App() {
  // console.log(cards);
  function handle(e) {
    console.log(e);
    console.log("hi");

    let $ = document.querySelector.bind(document);
    let $$ = document.querySelectorAll.bind(document);

    $$(".area").forEach((cell) => {
      let dayStart = cell.querySelector(".day-start").innerHTML;
      dayStart = new Date(dayStart);

      let count =
          (new Date() - dayStart) / (3600 * 24 * 1000); // 1000 milisecond
      // console.log((count - dayStart) / (3600 * 24 * 1000));

      cell.querySelector(".count-day").innerHTML = Math.round(count);
    });
  }

  return (
    <div className="main" onMouseEnter={handle}>
      {cards.map(({ name, day }, index) => (
        <Card name={name} day={day} key={
      index} />
      ))}
      
    </div>
  );
}

export default App;
