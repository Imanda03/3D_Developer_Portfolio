import { useSyncExternalStore } from "react";

const useMediaQuery = (query) =>
  useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false
  );

export default useMediaQuery;
