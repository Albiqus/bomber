import { LocationBorders } from "../types/LocationBorders"
import { LocationMatter } from "../types/LocationMatter"
import { MatterIds } from "../types/MatterIds"
import { PlayerPositions } from "../types/PlayerPositions"
import { PortalPositions } from "../types/PortalPositions"
import { WallersData } from "../types/WallerPositions"


export const CHUNKS_AMOUNT = 225


export const LOCATION_BORDERS: LocationBorders = {
    up: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    right: [15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225],
    down: [211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225],
    left: [1, 16, 31, 46, 61, 76, 91, 106, 121, 136, 151, 166, 181, 196, 211],
}


const WALL_IDS: MatterIds = {
    1: [65, 66, 67, 69, 70, 71, 155, 156, 157, 159, 160, 161, 80, 95, 125, 140, 86, 101, 131, 146, 87, 90, 147, 148, 149, 150, 10, 55, 110, 158],
    2: [1, 2, 3, 4, 31, 32, 33, 34, 21, 36, 51, 66, 49, 64, 79, 80, 81, 37, 38, 39, 40, 42, 43, 44, 45],
    3: [1]
}
const BARRIER_IDS: MatterIds = {
    1: [68, 116, 25, 40, 88, 89],
    2: [19, 6, 7, 22, 41],
    3: [2]
}
export const LOCATION_MATTER: LocationMatter = {
    wall: WALL_IDS,
    barrier: BARRIER_IDS,
}


export const PORTAL_POSITIONS: PortalPositions = {
    1: 29,
    2: 146,
    3: 3,
}


export const PLAYER_POSITIONS: PlayerPositions = {
    1: 113,
    2: 17,
    3: 4,
}


export const WALLERS_DATA: WallersData = {
    1: null,
    2: [{
        id: 5,
        trajectory: [5, 20, 35, 50, 65],
        axis: 'vertical'
    }
    ],
    3: null
}