// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "GET_TRANSACTION":
      return {
        ...state,
      };
    case "FILTER_TRANSACTION":
      console.log(action.payload, 'actionp ')
      return {
        ...state,
        transactions: [...action.payload]
        // transactions: [action.payload, ...state.transactions],
      };
    case "GET_BALANCE":
      state.balance = state.income - state.expense;
      return {
        ...state,
      };
    case "GET_INCOME":
      let totalIncome = 0;
      for (let i = 0; i < state.transactions.length; i++) {
        if (state.transactions[i].category === "income") {
          totalIncome = totalIncome += state.transactions[i].amount;
        }
      }
      state.income = totalIncome;
      return {
        ...state,
      };
    case "GET_EXPENSE":
      let totalExpense = 0;
      for (let i = 0; i < state.transactions.length; i++) {
        if (state.transactions[i].category === "expense") {
          totalExpense = totalExpense += state.transactions[i].amount;
        }
      }
      state.expense = totalExpense;
      return {
        ...state,
      };
    default:
      return state;
  }
};
