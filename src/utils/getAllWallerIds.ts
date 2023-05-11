import { WallerZone } from "../types/WallerZone";


export const getAllWallerIds = (wallerZones: WallerZone[]) => {
    const allWallerIds: number[] = []

    wallerZones.forEach((wallerZone: WallerZone) => {
        allWallerIds.push(wallerZone.id)
        allWallerIds.push(wallerZone.prevId)
    })

    return allWallerIds
}