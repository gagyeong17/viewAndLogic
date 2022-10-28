export const setCashAmount = (prev, e) => {
  return {
    ...prev,
    cash: { ...prev.cash, amount: e?.target?.value },
  };
};
