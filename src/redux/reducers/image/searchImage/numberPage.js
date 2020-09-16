const page = {
    value:0
}

const numberPage_2 = (state = page, action ) => {
    if (action.type = "CHANGE_NUMBER_PAGE") return {value: state.value +1}
    return state
    // switch (action.type) {
    //     case "CHANGE_NUMBER_PAGE":
    //         return {
    //             value: state.value +1
    //         }
    //     default:
    //         return state;
    // }
}

export default numberPage_2;