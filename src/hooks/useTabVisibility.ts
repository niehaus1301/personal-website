import { useEffect, useState } from "react";

const useTabVisibility = () => {
  const [isTabVisible, setIsTabVisible] = useState<boolean>(!document.hidden);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return isTabVisible;
};

export default useTabVisibility;
