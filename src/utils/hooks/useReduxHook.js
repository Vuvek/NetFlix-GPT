import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import actions from '../../reduxStore/actions.redux'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions,dispatch)
}

export const useTypeSelector = useSelector;
