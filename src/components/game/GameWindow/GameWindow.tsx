import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Air, Barrier, Chunk, Div, Idph, Portal, Wall } from "./GameWindow-styles"

export const GameWindow = () => {

    const { chunks } = useSelector((state: RootState) => state.location);
    console.log(chunks)
    const chunkItems = Object.entries(chunks).map(el => el[1]).map((chunk: any) => {

        return (
            <Chunk key={chunk.id}>
                {/* <Idph> {chunk.id}</Idph> */}
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