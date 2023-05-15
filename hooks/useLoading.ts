import React from "react";

/**
 * Helper for loading scenarios
 * @returns {readonly [boolean, () => void]}
 */

const useLoadingHook = () => {
  const [isLoading, setLoading] = React.useState(false);

  const toggleLoading = () => {
    setLoading((prev) => !prev);
  };
  return [isLoading, toggleLoading] as const;
};

export default useLoadingHook;
