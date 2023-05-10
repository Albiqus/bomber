type WallerPosition = {
    id: number,
    trajectory: number[],
    axis: string;
}


export type WallersData = {
    [key: number]: WallerPosition[] | null
}
