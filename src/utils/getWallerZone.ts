import { WallerType } from "../types/Waller";


export const getWallerZone = (wallers: WallerType[]) => {
    const wallerZone: number[] = []

    wallers.forEach((waller) => {
        wallerZone.push(waller.id)
        wallerZone.push(waller.prevId)
    })

    return wallerZone
}