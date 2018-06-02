// import { createStore, combineReducers } from 'redux';
// import uuid from 'uuid';
//
// //ADD_EXPENSE
// const addExpense = ({
//   description = '',
//   notes = '',
//   amount = 0,
//   createAt = 0
// }) => ({
//   type: 'ADD_EXPENSE',
//   expense: {
//     id: uuid(),
//     description,
//     notes,
//     amount,
//     createAt
//   }
// });
//
// //REMOVE_EXPENSE
// const removeExpense = ({ id } = {}) => ({
//   type: 'REMOVE_EXPENSE',
//   id
// });
//
// //EDIT_EXPENSE
// const editExpense = (id, update) => ({
//   type: 'EDIT_EXPENSE',
//   id,
//   update
// });
//
// //SET_TEXT_FILTER
// const setTextFilter = (text = '') => ({
//   type: 'SET_TEXT_FILTER',
//   text
// });
//
// //SORT_BY_AMOUNT
// const sortByAmount = () => ({
//   type: 'SORT_BY_AMOUNT',
// });
//
// //SORT_BY_DATE
// const sortByDate = () => ({
//   type: 'SORT_BY_DATE'
// });
//
// //SORT_START_DATE
// const setStartDate = (startDate = undefined) => ({
//   type: 'SORT_START_DATE',
//   startDate
// });
//
// //SORT_END_DATE
// const setEndDate = (endDate = undefined) => ({
//   type: 'SORT_END_DATE',
//   endDate
// });
//
// //Expense Reducer
// const expenseReducerDefaultState = [];
// const expenseReducer = (state = expenseReducerDefaultState, action) => {
//   switch (action.type) {
//     case 'ADD_EXPENSE':
//       return [
//         ...state,
//         action.expense
//       ];
//     case 'REMOVE_EXPENSE':
//       return state.filter(({ id }) => id !== action.id);
//     case 'EDIT_EXPENSE':
//       return state.map((expense) => {
//         if (expense.id === action.id) {
//           return {
//             ...expense,
//             ...action.update
//           }
//         } else {
//           return expense;
//         }
//       });
//     default:
//       return state;
//   }
// }
//
// // filter Reducer
// const filterReducerDefaultState = {
//     text: '',
//     sortBy: 'date',
//     startDate: undefined,
//     endDate: undefined
// };
// const filterReducer = (state = filterReducerDefaultState, action) => {
//   switch (action.type) {
//     case 'SET_TEXT_FILTER':
//       return {
//         ...state,
//         text: action.text
//       };
//     case 'SORT_BY_AMOUNT':
//       return {
//         ...state,
//         sortBy: 'amount'
//       };
//     case 'SORT_BY_DATE':
//       return {
//         ...state,
//         sortBy: 'date'
//       };
//     case 'SORT_START_DATE':
//       return {
//         ...state,
//         startDate: action.startDate
//       };
//     case 'SORT_END_DATE':
//       return {
//         ...state,
//         endDate: action.endDate
//       };
//     default:
//       return state;
//   }
// }
//
// const store = createStore(
//   combineReducers({
//     expenses: expenseReducer,
//     filters: filterReducer
//   })
// );
//
// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });
//
// const expenseOne = store.dispatch(addExpense({
//   description: 'Buy a PCs',
//   notes: 'ASUS',
//   amount: 1200,
//   createdAt: 1000
// }));
//
// const expenseTwo = store.dispatch(addExpense({
//   description: 'LEARN REDUX',
//   notes: 'Web Development',
//   amount: 0,
//   createdAt: 3000
// }));
//
// store.dispatch(editExpense(expenseOne.expense.id, { description: 'BUY LAMBIRGHINI', amount: 300000, notes: 'my Feature Car Inchallah' }));
