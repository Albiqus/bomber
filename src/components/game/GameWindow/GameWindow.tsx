import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Air, Barrier, Chunk, DeathPlayer, Div, Idph, Player, Portal, Wall } from "./GameWindow-styles"
import React, { useEffect, useState } from "react";
import { usePlayerInteraction } from "../../../hooks/usePlayerAction";
import { getInteractionType } from "../../../utils/getInteractionType";
import { isInteractionAvailable } from "../../../utils/isInteractionAvailable";
import { useExplosion } from "../../../hooks/useExplosion";
import { EffectSounds } from "./EffectSounds/EffectSounds";
import { useDeath } from "../../../hooks/useDeath";


export const GameWindow = () => {

    const { chunks, explodedChunkIds, bombPos } = useSelector((state: RootState) => state.location);
    const { playerPos, animationCoords, gazeDirection, isDeath } = useSelector((state: RootState) => state.player)

    const [currentPressedKey, setCurrentPressedKey] = useState(null)

    const makeDeath = useDeath()
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
        if (!isInteractionAvailable(chunks, playerPos, interactionType, bombPos, isDeath)) {
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
    }, [playerPos, currentPressedKey, bombPos, chunks, isDeath])

    useEffect(() => {
        if (explodedChunkIds?.includes(playerPos)) {
            makeDeath()
        }
    }, [explodedChunkIds])

    const chunkItems = Object.entries(chunks).map(el => el[1]).map((chunk: any) => {
        return (
            <Chunk key={chunk.id}>
                <Idph> {chunk.id}</Idph>
                {chunk.id === playerPos && !isDeath &&<Player coordinates={animationCoords} gazeDirection={gazeDirection} isDeath={isDeath} />}
                {chunk.id === playerPos && isDeath && <DeathPlayer coordinates={animationCoords} gazeDirection={gazeDirection} isDeath={isDeath} />}
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