import { LocationMatter } from "../types/LocationMatter"
import { MatterIds } from "../types/MatterIds"


const WALL_IDS: MatterIds = {
    1: [65, 66, 67, 69, 70, 71, 155, 156, 157, 159, 160, 161, 80, 95, 125, 140, 86, 101, 131, 146, 87, 90, 147, 148, 149, 150, 10, 55, 110, 158],
}

const BARRIER_IDS: MatterIds = {
    1: [68, 116, 25, 40, 88, 89],
}

const PORTAL_IDS: MatterIds = {
    1: [29]
}

export const LOCATION_MATTER: LocationMatter = {
    wall: WALL_IDS,
    barrier: BARRIER_IDS,
    portal: PORTAL_IDS,
}

