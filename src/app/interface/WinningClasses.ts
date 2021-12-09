import { Tip } from "./Tip";

export interface WinningClasses {
    id: number | null;
    winningClass: string;
    hits: number;
    isSuperHit: boolean;
    tips: Tip[];
}