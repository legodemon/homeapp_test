import * as ActionsConst from '../const/const'

const initialState = {loading: true}

export default function state(state = initialState, {type, payload}) {
  switch (type) {

    case ActionsConst.GET_DATA_REQUEST:
      return {...state, loading: true}

    case ActionsConst.GET_DATA_SUCCESS:
      return {...state, loading: false, ...payload}

    case ActionsConst.GET_DATA_ERROR:
      return {error: payload}

    default:
      return state
  }
}