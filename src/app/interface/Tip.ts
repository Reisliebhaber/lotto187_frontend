import { User } from "./User";

export interface Tip {
    id: number | null;
    tips: string;
    superNumber: number;
    tippingTime: Date | null;
    payout: number;
    users: User[] | null;
}