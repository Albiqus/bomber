import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Air, Barrier, Chunk, Div, Idph, Player, Portal, Wall } from "./GameWindow-styles"
import { useEffect, useState } from "react";
import { usePlayerInteraction } from "../../../hooks/usePlayerAction";
import { getInteractionType } from "../../../utils/getInteractionType";
import { isInteractionAvailable } from "../../../utils/isInteractionAvailable";


export const GameWindow = () => {

    const { chunks } = useSelector((state: RootState) => state.location);
    const { playerPosition, animationCoords, gazeDirection } = useSelector((state: RootState) => state.player);

    const [currentPressedKey, setCurrentPressedKey] = useState(null)

    const makePlayerInteraction = usePlayerInteraction()

    const onGameKeyDown = (e: any) => {
        if (currentPressedKey === e.keyCode) {
            return
        }
        const interactionType = getInteractionType(e.keyCode)
        if (!interactionType) {
            return
        }
        if (!isInteractionAvailable(chunks, playerPosition, interactionType)) {
            return
        }
        setCurrentPressedKey(e.keyCode)
        makePlayerInteraction(interactionType)
    }

    const onGameKeyUp = () => {
        setCurrentPressedKey(null)
    }


    useEffect(() => {
        window.addEventListener('keydown', onGameKeyDown)
        window.addEventListener('keyup', onGameKeyUp)
        return () => {
            window.removeEventListener('keydown', onGameKeyDown)
            window.removeEventListener('keyup', onGameKeyDown)
        }
    }, [playerPosition, currentPressedKey])


    const chunkItems = Object.entries(chunks).map(el => el[1]).map((chunk: any) => {
        console.log(chunk)
        return (
            <Chunk key={chunk.id}>
                {/* <Idph> {chunk.id}</Idph> */}
                {chunk.id === playerPosition && <Player coordinates={animationCoords} gazeDirection={gazeDirection} />}
                {chunk.type === 'air' && <Air />}
                {chunk.type === 'wall' && <Wall />}
                {chunk.type === 'barrier' && <Barrier />}
                {chunk.type === 'portal' && <Portal />}
            </Chunk>
        )
    })

    return (
        <Div>
            {chunkItems}
        </Div>
    )
}