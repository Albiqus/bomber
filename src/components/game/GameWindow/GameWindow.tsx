import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Air, Barrier, Chunk, Div, Idph, Player, Portal, Wall } from "./GameWindow-styles"
import React, { useEffect, useState } from "react";
import { usePlayerInteraction } from "../../../hooks/usePlayerAction";
import { getInteractionType } from "../../../utils/getInteractionType";
import { isInteractionAvailable } from "../../../utils/isInteractionAvailable";
import { useExplosion } from "../../../hooks/useExplosion";
import { EffectSounds } from "./EffectSounds/EffectSounds";


export const GameWindow = () => {

    const { chunks } = useSelector((state: RootState) => state.location);
    const { playerPos, animationCoords, gazeDirection, bombPos } = useSelector((state: RootState) => state.player)

    const [currentPressedKey, setCurrentPressedKey] = useState(null)

    const makePlayerInteraction = usePlayerInteraction()
    const makeExplosion = useExplosion()

    const onGameKeyDown = (e: any) => {
        if (currentPressedKey === e.keyCode) {
            return
        }
        const interactionType = getInteractionType(e.keyCode)
        if (!interactionType) {
            return
        }
        if (!isInteractionAvailable(chunks, playerPos, interactionType, bombPos)) {
            return
        }
        setCurrentPressedKey(e.keyCode)
        makePlayerInteraction(interactionType)
    }

    const onGameKeyUp = () => {
        setCurrentPressedKey(null)
    }

    useEffect(() => {
        if (bombPos) {
            makeExplosion(chunks, bombPos)
        }
    }, [bombPos])

    useEffect(() => {
        window.addEventListener('keydown', onGameKeyDown)
        window.addEventListener('keyup', onGameKeyUp)
        return () => {
            window.removeEventListener('keydown', onGameKeyDown)
            window.removeEventListener('keyup', onGameKeyDown)
        }
    }, [playerPos, currentPressedKey, bombPos])


    const chunkItems = Object.entries(chunks).map(el => el[1]).map((chunk: any) => {
        return (
            <Chunk key={chunk.id}>
                <Idph> {chunk.id}</Idph>
                {chunk.id === playerPos && <Player coordinates={animationCoords} gazeDirection={gazeDirection} />}
                {chunk.type === 'air' && <Air bombPos={bombPos} airPos={chunk.id} />}
                {chunk.type === 'wall' && <Wall />}
                {chunk.type === 'barrier' && <Barrier />}
                {chunk.type === 'portal' && <Portal />}
            </Chunk>
        )
    })
    
    return (
        <Div>
            {chunkItems}
            <EffectSounds />
        </Div>
    )
}