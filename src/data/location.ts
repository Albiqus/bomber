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
    2: [1, 2, 3, 4, 31, 32, 33, 34, 21, 36, 51, 66, 49, 64, 79, 94, 95, 96, 81, 37, 38, 39, 40, 42, 43, 44, 45],
    3: [162, 163, 164, 165, 192, 193, 194, 195, 207, 222, 190, 205, 220, 221, 40, 85, 55, 100, 115, 130, 145, 160, 175, 42, 57, 72, 87, 102, 117, 132, 147, 26, 25, 27,
         20, 21, 22, 23, 24, 110, 111, 112, 113, 114, 34, 49, 79, 94, 95, 35]
}
const BARRIER_IDS: MatterIds = {
    1: [68, 116, 25, 40, 88, 89],
    2: [19, 6, 7, 22, 41],
    3: [177, 70, 64]
}
export const LOCATION_MATTER: LocationMatter = {
    wall: WALL_IDS,
    barrier: BARRIER_IDS,
}


export const PORTAL_POSITIONS: PortalPositions = {
    1: 29,
    2: 146,
    3: 62,
}


export const PLAYER_POSITIONS: PlayerPositions = {
    1: 113,
    2: 17,
    3: 179,
}


export const WALLERS_DATA: WallersData = {
    1: null,
    2: [{
        id: 5,
        trajectory: [5, 20, 35, 50, 65, 80],
        axis: 'vertical'
    }
    ],
    3: [{
        id: 116,
        trajectory: [41, 56, 71, 86, 101, 116, 131, 146, 161, 176, 191, 206],
        axis: 'vertical'
    },
    {
        id: 38,
        trajectory: [38, 53, 68, 83, 98],
        axis: 'vertical'
    },
    {
        id: 81,
        trajectory: [36, 51, 66, 81, 96],
        axis: 'vertical'
    },
    ],
}