import React, { createContext, useReducer } from "react"
import Reducer from "./Reducer"
import { ContextDevTool } from "react-context-devtool"
const initialState = {
    isReasonDialogOpen: false,
    isVerifyDialogOpen: false,
    isNotificationOverlayOpen: false,
    selectedNotificationItem: {},
    dialogType: {},
    worker_code: {},
    notificationItems: [],
    selectedPlanItem: {},
}

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState)
    return (
        <Context.Provider value={[state, dispatch]}>
            <ContextDevTool context={Context} id="uniqContextId" displayName="Root" />
            {children}
        </Context.Provider>
    )
}

export const Context = createContext(initialState)
export default Store
