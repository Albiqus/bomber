import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Air, Barrier, Chunk, DeathPlayer, Div, Electricity, FinishingPlayer, Idph, Player, Portal, Wall, Waller } from "./GameWindow-styles"
import React, { useEffect, useState } from "react";
import { usePlayerInteraction } from "../../../hooks/usePlayerAction";
import { getInteractionType } from "../../../utils/getInteractionType";
import { isInteractionAvailable } from "../../../utils/isInteractionAvailable";
import { useExplosion } from "../../../hooks/useExplosion";
import { EffectSounds } from "./EffectSounds/EffectSounds";
import { useDeath } from "../../../hooks/useDeath";
import { useFinishLevel } from "../../../hooks/useFinishLevel";
import { useWallerMovement } from "../../../hooks/useWallerMovement";
import { WallerType } from "../../../types/Waller";
import { setWallerHitSound } from "../../../actionCreators/sounds/setWallerHitSound";


export const GameWindow = () => {
    const dispatch = useDispatch()

    const { chunks, explodedChunkIds, bombPos, portalPos } = useSelector((state: RootState) => state.location);
    const { playerPos, animCoords, gazeDirection, isDeath, isFinish } = useSelector((state: RootState) => state.player)
    const { wallers, wallerChunkIds } = useSelector((state: RootState) => state.waller)

    const [currentPressedKey, setCurrentPressedKey] = useState(null)
  
    const makeDeath = useDeath()
    const makePlayerInteraction = usePlayerInteraction()
    const makeExplosion = useExplosion()
    const finishLevel = useFinishLevel()
    const makeWallerMovement = useWallerMovement()

    const onGameKeyDown = (e: any) => {
        if (currentPressedKey === e.keyCode) {
            return
        }
        const interactionType = getInteractionType(e.keyCode)
        if (!interactionType) {
            return
        }
        if (!isInteractionAvailable(chunks, playerPos, interactionType, bombPos, isDeath, isFinish)) {
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
    }, [playerPos, currentPressedKey, bombPos, chunks, isDeath, isFinish])

    useEffect(() => {
        if (explodedChunkIds?.includes(playerPos) && !isDeath) {
            makeDeath()
        }
    }, [explodedChunkIds])

    useEffect(() => {
        if (playerPos === portalPos) {
            finishLevel()
        }
    }, [playerPos, portalPos])

    useEffect(() => {
        if (wallers) {
            makeWallerMovement(wallers)
        }
    }, [wallers])

    useEffect(() => {
        if (!wallerChunkIds) return
        if (wallerChunkIds.includes(playerPos) && !isDeath) {
            dispatch(setWallerHitSound(true))
            makeDeath()
        }
    }, [wallerChunkIds, playerPos])
    
    const chunkItems = Object.entries(chunks).map(el => el[1]).map((chunk: any) => {
        return (
            <Chunk key={chunk.id}>
                <Idph> {chunk.id}</Idph>
                {chunk.id === playerPos && !isDeath && !isFinish && <Player animCoords={animCoords} gazeDirection={gazeDirection} isDeath={isDeath} />}
                {chunk.id === playerPos && isDeath && <DeathPlayer animCoords={animCoords} gazeDirection={gazeDirection} isDeath={isDeath} />}
                {chunk.id === playerPos && isFinish && <FinishingPlayer animCoords={animCoords} gazeDirection={gazeDirection} isDeath={isDeath} />}
                {chunk.id === portalPos && <Portal />}
                {wallers && wallers.map((el: WallerType) => el.id).includes(chunk.id) &&
                    <Waller animCoords={wallers.find((el: WallerType) => el.id === chunk.id).animCoords} >
                        <Electricity />
                    </Waller>}
                {chunk.type === 'air' && <Air bombPos={bombPos} airPos={chunk.id} />}
                {chunk.type === 'wall' && <Wall />}
                {chunk.type === 'barrier' && <Barrier />}
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