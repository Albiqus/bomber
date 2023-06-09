import { RootState } from "../../store/store";
import { Div } from "./Game-styles"
import { useSelector } from "react-redux";
import { InitialWindow } from "./InitialWindow/InitialWindow";
import { MenuWindow } from "./MenuWindow/MenuWindow";
import { GameWindow } from "./GameWindow/GameWindow";
import { LossWindow } from "./LossWindow/LossWindow";
import { VictoryWindow } from "./VictoryWundow/VictoryWundow";
import { EndingWindow } from "./EndingWindow/EndingWindow";


export const Game = () => {

    const { isInitialWindow, isMenuWindow, isGameWindow, isLossWindow, isVictoryWindow, isEndingWindow } = useSelector((state: RootState) => state.windows);

    return (
        <Div>
            {isInitialWindow && <InitialWindow />}
            {isMenuWindow && <MenuWindow />}
            {isGameWindow && <GameWindow />}
            {isLossWindow && <LossWindow />}
            {isVictoryWindow && <VictoryWindow />}
            {isEndingWindow && <EndingWindow />}
        </Div>
    )
}