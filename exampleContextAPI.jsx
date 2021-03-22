import React, { useContext } from "react"
import { Context } from "../../store/Stroe"
import { SET_REASON_DIALOG_OPEN_TRUE } from "../../store/types"
function MainPage() {
    // const [state, dispatch] = useContext(Context)
    // const { isReasonDialogOpen } = state
    // console.log(isReasonDialogOpen)
    // const onClick = () => {
    //     dispatch({ type: SET_REASON_DIALOG_OPEN_TRUE, data: true })
    // }
    return (
        <div>
            <h1 onClick={onClick}>Hello World</h1>
        </div>
    )
}

export default MainPage
