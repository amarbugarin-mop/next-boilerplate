import * as React from "react";

/**
 * Handles the common open,close and toggle scenarios/ behavior
 * @param {boolean} initial - The initial state passed as a boolean value
 * @returns {setIsOpen: (value: React.SetStateAction<boolean>) => void, close: () => void,  toggle: () => void}
 */

const useDisclosure = (initial = false) => {
  const [isOpen, setIsOpen] = React.useState(initial);

  const open = React.useCallback(() => setIsOpen(true), []);
  const close = React.useCallback(() => setIsOpen(false), []);
  const toggle = React.useCallback(() => setIsOpen((state) => !state), []);

  return { isOpen, open, close, toggle };
};

export default useDisclosure;
