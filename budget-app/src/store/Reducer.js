// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  console.log(state, 'reducer')

  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    // case "GET_BALANCE":
    //   return {
    //     ...state,
    //   };
    // case "GET_INCOME":
    //   let totalIncome = 0
    //   for (let i = 0; i < state.transactions.length; i++) {
    //     if (state.transactions[i].category === "income") {
    //       totalIncome = totalIncome += state.transactions[i].amount;
    //     }
    //   }
    //   state.income = totalIncome
    //   console.log(state, 'income reducer')
    //   return {
    //     ...state,
    //   };
    // case "GET_EXPENSE":
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
};
