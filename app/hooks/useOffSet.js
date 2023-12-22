import { useEffect, useState } from "react";

function useOffSet() {
  const [offSet, setOffSet] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffSet(window.scrollY);
    };
  }, []);

  return [offSet];
}

export default useOffSet;
