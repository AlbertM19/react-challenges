import { useState } from "react";
import { Container } from "@mui/material";

import List from "./List";
import Actions from "./Actions";
import { intersection, not } from "./util";

function FirstChallenge() {
  const items = [1, 2, 3, 4];
  const [leftItems, setLeftItems] = useState([...items]);
  const [rightItems, setRightItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  const leftCheckedItems = intersection(leftItems, checkedItems);
  const rightCheckedItems = intersection(rightItems, checkedItems);

  const handleChange = (item) => {
    const currentIndex = checkedItems.indexOf(item);
    const newCheckedItems = [...checkedItems];

    if (currentIndex === -1) {
      newCheckedItems.push(item);
    } else {
      newCheckedItems.splice(currentIndex, 1);
    }

    setCheckedItems(newCheckedItems);
  };

  console.log(leftItems);
  console.log(rightItems);
  console.log(checkedItems);

  const moveToRight = () => {
    if (
      checkedItems.length !== 0 &&
      !checkedItems.every((v) => rightItems.includes(v))
    ) {
      setRightItems(rightItems.concat(checkedItems).sort((a, b) => a - b));
      setLeftItems(not(leftItems, leftCheckedItems));
      setCheckedItems(not(checkedItems, leftCheckedItems));
    }
  };

  const moveToLeft = () => {
    if (
      checkedItems.length !== 0 &&
      !checkedItems.every((v) => leftItems.includes(v))
    ) {
      setLeftItems(leftItems.concat(checkedItems).sort((a, b) => a - b));
      setRightItems(not(rightItems, rightCheckedItems));
      setCheckedItems(not(checkedItems, rightCheckedItems));
    }
  };

  return (
    <Container
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <List items={leftItems} handleChange={handleChange} />
      <Actions moveToRight={moveToRight} moveToLeft={moveToLeft} />
      <List items={rightItems} handleChange={handleChange} />
    </Container>
  );
}

export default FirstChallenge;
