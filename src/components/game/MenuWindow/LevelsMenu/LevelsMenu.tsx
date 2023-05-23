import { useDispatch } from "react-redux"
import { BackButton, Div, LevelItem, LevelPrewiew, LevelsWrapper, Lock, P, SelectedLevel, StartButton } from "./LevelsMenu-styles"
import { setIsLevelsWindow } from "../../../../actionCreators/windows/setIsLevelsWindow"
import { getLevels } from "../../../../utils/getLevels"
import lock from '../../../../images/levels/lock.png'
import { useResetParams } from "../../../../hooks/useResetParams"
import { useRenderLocation } from "../../../../hooks/useRenderLocation"
import { setIsMenuWindow } from "../../../../actionCreators/windows/setIsMenuWindow"
import { setIsGameWindow } from "../../../../actionCreators/windows/setIsGameWindow"
import { useState } from "react";
import { setLevel } from "../../../../actionCreators/location/setLevel"
import { LEVEL_IMAGES } from "../../../../data/levelImages"


export const LevelsMenu = () => {
    
    const dispatch = useDispatch()
    const resetParams = useResetParams()
    const renderLocation = useRenderLocation()

    const maxAvailableLevel: any = localStorage.getItem('maxAvailableLevel') || 1
    const levels = getLevels(maxAvailableLevel)

    const [levelSelected, setLevelSelected] = useState(maxAvailableLevel)

    const onBackButtonClick = () => {
        dispatch(setIsLevelsWindow(false))
    }

    const onStartButtonClick = () => {
        resetParams()
        renderLocation(levelSelected)
        dispatch(setLevel(levelSelected))
        dispatch(setIsMenuWindow(false))
        dispatch(setIsGameWindow(true))
    }

    const onLevelItemClick = (e: any) => {
        const id = +e.currentTarget.getAttribute('id')
        if (id > maxAvailableLevel) return
        setLevelSelected(id)   
    }
  
    const levelItems = levels.map((level) => {
        return (
            <LevelItem id={level.id} key={level.id} onClick={onLevelItemClick} isAccess={level.isAccess} levelSelected={levelSelected}>
                {!level.isAccess && <Lock src={lock} ></Lock>}
                {level.isAccess && <LevelPrewiew src={LEVEL_IMAGES[level.id]}></LevelPrewiew>}
            </LevelItem>
        )
    })

    return (
        <Div>
            <BackButton onClick={onBackButtonClick}></BackButton>
            <P>выберите уровень</P>
            <LevelsWrapper>
                {levelItems}
            </LevelsWrapper>
            <SelectedLevel>выбран: {levelSelected}</SelectedLevel>
            <StartButton onClick={onStartButtonClick}>играть</StartButton>
        </Div>
    )
}