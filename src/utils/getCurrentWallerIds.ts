import { WallerZone } from "../types/WallerZone";


export const getCurrentWallerIds = (wallerZones: WallerZone[]) => {
    return wallerZones.map((wallerZone: WallerZone) => wallerZone.prevId)
}