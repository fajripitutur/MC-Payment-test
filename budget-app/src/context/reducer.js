
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch(action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      }
    case 'GET_TRANSACTION':
      console.log(state, '---reducer')
      return {
        ...state,
      }
    case 'GET_BALANCE':
      console.log(state, '---reducer')

      return {
        ...state,
      }
    default:
    // console.log(state, '---default')
      return state;
  }
}