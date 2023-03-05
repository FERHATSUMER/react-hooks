import { useEffect, useState } from "react";

function Useeffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("component ilk yüklendiğinde çalışır");
    return console.log("component destroy edildi!");
  }, []);
  useEffect(() => {
    console.log("count değeri değişti =", count);
  }, [count]);

  useEffect(() => {
    console.log("component render oldu!");
  });
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount((count) => count + 1)}>Arttır</button>
      <hr />
      test componenti
    </div>
  );
}
export default Useeffect;
