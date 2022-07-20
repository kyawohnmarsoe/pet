import axios from 'axios'

// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
    await axios.get('/api/operators/list/all-data').then(response => {
      dispatch({
        type: 'GET_ALL_DATA',
        data: response.data
      })
      // console.log(response.data)
    })
  }
}

// ** Get data on page or row change
export const getData = params => {
  return async dispatch => {
    await axios.get('/api/operators/list/data', params).then(response => {
      dispatch({
        type: 'GET_DATA',
        data: response.data,
        totalPages: response.data.total,
        params
      })
    })
  }
}

// ** Get opeartor
export const getOperator = id => {
  return async dispatch => {
    await axios
      .get('/api/operators/operator', { id })
      .then(response => {
        dispatch({
          type: 'GET_OPERATOR',
          selectedOperator: response.data.operator
        })
      })
      .catch(err => console.log(err))
  }
}

// ** Add new opeartor
export const addOperator = operator => {
  return (dispatch, getState) => {
    axios
      .post('/apps/operator/add-operator', operator)
      .then(response => {
        dispatch({
          type: 'ADD_OPERATOR',
          operator
        })
      })
      .then(() => {
        dispatch(getData(getState().operators.params))
        dispatch(getAllData())
      })
      .catch(err => console.log(err))
  }
}

// ** Delete operator
export const deleteOpeartor = id => {
  return (dispatch, getState) => {
    axios
      .delete('/apps/operator/delete', { id })
      .then(response => {
        dispatch({
          type: 'DELETE_OPERATOR'
        })
      })
      .then(() => {
        dispatch(getData(getState().operators.params))
        dispatch(getAllData())
      })
  }
}