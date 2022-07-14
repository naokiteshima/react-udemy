import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [onoffFlag, setOnoffFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickCountDown = () => {
    setNum(num - 1);
  };

  const changeOnoffFlag = () => {
    setOnoffFlag(!onoffFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      onoffFlag || setOnoffFlag(true);
    } else {
      onoffFlag && setOnoffFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気</ColorfulMessage>
      <ColorfulMessage color="pink">お元気！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickCountDown}>カウントダウン</button>
      <button onClick={changeOnoffFlag}>on/off</button>
      <p>{num}</p>
      {onoffFlag && <p>fdhisufhaidfhsod</p>}
    </>
  );
};

export default App;
