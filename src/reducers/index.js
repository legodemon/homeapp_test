import * as ActionsConst from '../const/const'

const initialState = {loading: true, currentEdit: null, saveCommentStatus: null}

export default function state(state = initialState, {type, payload}) {
  switch (type) {

    case ActionsConst.GET_DATA_REQUEST:
      return {...state, loading: true}

    case ActionsConst.GET_DATA_SUCCESS:
      return {...state, loading: false, data: payload}

    case ActionsConst.GET_DATA_ERROR:
      return {error: payload}

    case ActionsConst.OPEN_MODAL:
      return {...state, currentEdit: payload}

    case ActionsConst.CLOSE_MODAL:
      return {...state, currentEdit: null}

    case ActionsConst.SAVE_COMMENT_REQUEST:
      return {...state, saveCommentStatus: ActionsConst.SAVE_COMMENT_REQUEST}

    case ActionsConst.SAVE_COMMENT_SUCCESS:
      const {id, comment} = payload
      state.data.find((item) => item.id === id).body = comment
      return {...state, saveCommentStatus: ActionsConst.SAVE_COMMENT_SUCCESS, currentEdit: null}
    default:
      return state
  }
}