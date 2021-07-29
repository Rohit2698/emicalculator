import { createContext, useState } from "react";

export const StoreContext = createContext();

export const ContextProvider = ({ children }) => {
  const [amount, setAmount] = useState("");
  const [tenure, setTenure] = useState("");
  const [interestRate, setInterestRate] = useState("");

  const context = {
    amount: amount,
    tenure: tenure,
    interestRate: interestRate,
    setAmount: (amount) => setAmount(amount),
    setTenure: (tenure) => setTenure(tenure),
    setInterestRate: (rate) => setInterestRate(rate),
  };

  return (
    <StoreContext.Provider value={context}>{children}</StoreContext.Provider>
  );
};
