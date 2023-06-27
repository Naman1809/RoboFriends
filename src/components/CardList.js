import React from "react";
import Card from "./Card";
// import { robots } from "./robots";
const CardList = ({ robots }) => {
  //   const cardComponent =
  // here we earlier created the card component of the map and then used it in the return but now we have shifted the whole component code in the return itself

  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};
export default CardList;
