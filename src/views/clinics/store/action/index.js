import axios from 'axios'

// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
    await axios.get('/api/clinics/list/all-data').then(response => {
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
    await axios.get('/api/clinics/list/data', params).then(response => {
      dispatch({
        type: 'GET_DATA',
        data: response.data.clinics,
        totalPages: response.data.total,
        params
      })
    })
  }
}

// ** Get clinic
export const getClinic = id => {
  return async dispatch => {
    await axios
      .get('/api/clinics/clinic', { id })
      .then(response => {
        dispatch({
          type: 'GET_CLINIC',
          selectedClinic: response.data.clinic
        })
      })
      .catch(err => console.log(err))
  }
}

// ** Add new clinic
export const addClinic = clinic => {
  return (dispatch, getState) => {
    axios
      .post('/apps/clinics/add-clinic', clinic)
      .then(response => {
        dispatch({
          type: 'ADD_CLINIC',
          clinic
        })
      })
      .then(() => {
        dispatch(getData(getState().clinics.params))
        dispatch(getAllData())
      })
      .catch(err => console.log(err))
  }
}

// ** Delete clinic
export const deleteClinic = id => {
  return (dispatch, getState) => {
    axios
      .delete('/apps/clinics/delete', { id })
      .then(response => {
        dispatch({
          type: 'DELETE_CLINIC'
        })
      })
      .then(() => {
        dispatch(getData(getState().clinics.params))
        dispatch(getAllData())
      })
  }
}
