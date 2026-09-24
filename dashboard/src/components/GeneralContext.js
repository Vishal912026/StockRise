import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid, mode) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [mode, setMode] = useState("BUY");

  const handleOpenWindow = (uid, orderMode = "BUY") => {
    setIsWindowOpen(true);
    setSelectedStockUID(uid);
    setMode(orderMode);
  };

  const handleCloseWindow = () => {
    setIsWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenWindow,
        closeBuyWindow: handleCloseWindow,
      }}
    >
      {props.children}
      {isWindowOpen && <BuyActionWindow uid={selectedStockUID} mode={mode} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;