import {SHOW_FORM_COMMENT} from '../../../actions/showFormComment/actionType';

const ishow = false

const showFormComment = (state = false, action) => {
    switch (action.type) {
        case SHOW_FORM_COMMENT:
            return {
                ...state,
                state: !state.state
            }
        default:
           return state;
    }
}

export default showFormComment;