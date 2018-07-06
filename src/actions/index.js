import * as ActionsConst from '../const/const'

export const getData = () => dispatch => {
  dispatch({type: ActionsConst.GET_DATA_REQUEST})

  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => window.setTimeout(() => dispatch({
      type: ActionsConst.GET_DATA_SUCCESS,
      payload: data
    }), 500))
    .catch(error => dispatch({
      type: ActionsConst.GET_DATA_ERROR,
      payload: error
    }))
}

export const openModal = id => dispatch => dispatch({type: ActionsConst.OPEN_MODAL, payload: id})

export const closeModal = () => dispatch => dispatch({type: ActionsConst.CLOSE_MODAL})