// ** Initial State
const initialState = {
  allData: [],
  data: [],
  total: 1,
  params: {},
  selectedOperator: null
}

const operators = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_DATA':
      return { ...state, allData: action.data }
    case 'GET_DATA':
      return {
        ...state,
        data: action.data,
        total: action.totalPages,
        params: action.params
      }
    case 'GET_OPERATOR':
      return { ...state, selectedOperator: action.selectedOperator }
    case 'ADD_OPERATOR':
      return { ...state }
    case 'DELETE_OPERATOR':
      return { ...state }
    default:
      return { ...state }
  }
}
export default operators
