import axios from 'axios'

// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
    await axios.get('/api/service-offer/list/all-data').then(response => {
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
    await axios.get('/api/service-offer/list/data', params).then(response => {
      dispatch({
        type: 'GET_DATA',
        data: response.data,
        totalPages: response.data.total,
        params
      })
    })
  }
}

// ** Get offer
export const getOffer = id => {
  return async dispatch => {
    await axios
      .get('/api/service-offer/offer', { id })
      .then(response => {
        dispatch({
          type: 'GET_OFFER',
          selectedOffer: response.data.offer
        })
      })
      .catch(err => console.log(err))
  }
}

// ** Add new offer
export const addOffer = offer => {
  return (dispatch, getState) => {
    axios
      .post('/apps/service-offer/add-offer', offer)
      .then(response => {
        dispatch({
          type: 'ADD_OFFER',
          offer
        })
      })
      .then(() => {
        dispatch(getData(getState().offers.params))
        dispatch(getAllData())
      })
      .catch(err => console.log(err))
  }
}

// ** Delete offer
export const deleteOffer = id => {
  return (dispatch, getState) => {
    axios
      .delete('/apps/service-offer/delete', { id })
      .then(response => {
        dispatch({
          type: 'DELETE_OFFER'
        })
      })
      .then(() => {
        dispatch(getData(getState().offers.params))
        dispatch(getAllData())
      })
  }
}