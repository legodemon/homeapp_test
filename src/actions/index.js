import * as ActionsConst from '../const/const'

export const getData = () => dispatch => {
  dispatch({type: ActionsConst.GET_DATA_REQUEST})

  fetch('/public/data.json')
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