import React, { createContext, PropsWithChildren, useState } from 'react';

/** Types */
type TOverlayType = 'overlay' | 'loader';

interface IOverlayContextProps {
  show: boolean;
  type?: TOverlayType;
  setShow: (value: boolean) => void;
  setType: (type: TOverlayType) => void;
}

export const OverlayContext = createContext<IOverlayContextProps>({
  show: false,
  setShow: () => ({}),
  type: 'overlay',
  setType: () => ({}),
});

export const OverlayContextProvider = ({ children }: PropsWithChildren) => {
  const [show, setShow] = useState<boolean>(false);
  const [type, setType] = useState<TOverlayType>('overlay');

  const value = {
    show,
    setShow,
    type,
    setType,
  };

  return <OverlayContext.Provider value={value}>{children}</OverlayContext.Provider>;
};
