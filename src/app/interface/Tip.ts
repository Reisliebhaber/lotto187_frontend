import { User } from "./User";

export interface Tip {
    id: number | null;
    tips: string;
    superNumber: number;
    tippingTime: Date;
    payout: number;
    users: User[];
}