// ** Initial State
const initialState = {
  allData: [],
  data: [],
  total: 1,
  params: {},
  selectedOperator: null
}

const offers = (state = initialState, action) => {
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
    case 'GET_OFFER':
      return { ...state, selectedOperator: action.selectedOperator }
    case 'ADD_OFFER':
      return { ...state }
    case 'DELETE_OFFER':
      return { ...state }
    default:
      return { ...state }
  }
}
export default offers
