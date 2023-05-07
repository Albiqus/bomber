import { useDispatch } from "react-redux"
import { renderChunks } from "../utils/renderChunks"
import { setLocation } from "../actionCreators/location/setLocation"


export const useRenderLocation = () => {
    const dispatch = useDispatch()

    const renderLocation = (level: number) => {
        const chunks = renderChunks(level)
        dispatch(setLocation(chunks))
    }

    return renderLocation
}