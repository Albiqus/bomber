import { DateDescription, Description, Div, P } from "./AdditionalInfo-styles"


export const AditionalInfo = () => {
    return (
        <Div>
            <P>Дополнительно</P>
            <Description>Игра является учебным практическим проектом</Description>
            <Description> Разработчик: <a rel="noreferrer" href="https://vk.com/albiqus" target="_blank">Рахманкулов Альберт</a></Description>

            <DateDescription>май 2023</DateDescription>
        </Div>
    )
}