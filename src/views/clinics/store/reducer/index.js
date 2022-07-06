// ** Initial State
const initialState = {
  allData: [],
  data: [],
  total: 1,
  params: {},
  selectedClinic: null
}

const clinics = (state = initialState, action) => {
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
    case 'GET_CLINIC':
      return { ...state, selectedClinic: action.selectedClinic }
    case 'ADD_CLINIC':
      return { ...state }
    case 'DELETE_CLINIC':
      return { ...state }
    default:
      return { ...state }
  }
}
export default clinics
