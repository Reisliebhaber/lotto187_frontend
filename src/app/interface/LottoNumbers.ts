import { Tip } from './Tip';
export interface LottoNumbers {
    id: number | null;
    lottoNumbers: string;
    superNumber: number;
    drawingTime: Date;
    tips: Tip[];
}