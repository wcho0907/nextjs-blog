import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// 目前 url 為 '/'
function Page() {
  const router = useRouter();
  const [counters, setCounters] = useState([]);

  const handleClick = () => {
    const counter = Math.round(Math.random() * 100);
    router.push(`/?counter=${counter}`, undefined, { shallow: true });
  };

  // router.query.counter 改變時, 
  useEffect(() => {
    if (router.query.counter) {
      setCounters((prev) => [
        ...prev,
        parseInt(router.query.counter),
      ]);
    }
  }, [router.query.counter]);

  return (
    <div>
      <ul>
        {counters.map((counter) => (
          <li key={counter}>{counter}</li>
        ))}
      </ul>
      <button onClick={handleClick}>add counter</button>
    </div>
  );
}

export default Page;