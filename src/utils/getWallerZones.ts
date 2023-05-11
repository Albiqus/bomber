import { WallerType } from "../types/Waller";
import { WallerZone } from "../types/WallerZone";


export const getWallerZones = (wallers: WallerType[]) => {
    const wallerZones: WallerZone[] = []

    wallers.forEach((waller) => {
        wallerZones.push({ id: waller.id, prevId: waller.prevId })
    })

    return wallerZones
}