import { useDispatch } from "react-redux/es/exports";
import { Div, Logo, Prompt } from "./InitialWindow-styles"
import { setIsInitialWindow } from "../../../actionCreators/setIsInitialWindow";
import { setIsMenuWindow } from "../../../actionCreators/setIsMenuWindow";


export const InitialWindow = () => {

    const dispatch = useDispatch()

    
    const onInitialWindowClick = () => {
        dispatch(setIsInitialWindow(false))
        dispatch(setIsMenuWindow(true))
    }

    return (
        <Div onClick={onInitialWindowClick}>
            <Logo>AlbiqusGame</Logo>
            <Prompt>кликните на экран</Prompt>
        </Div>
    )
}