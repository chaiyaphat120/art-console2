import {SET_REASON_DIALOG_OPEN_TRUE} from './types'
const Reducer = (state, action) => {
    switch (action.type) {
        case SET_REASON_DIALOG_OPEN_TRUE:
            return {
                ...state,
                isReasonDialogOpen: action.data,
            }
        default:
            return {
                ...state,
            }
    }
}

export default Reducer
