import { selector } from "recoil";
import { availablePricing } from "./atom";
import {api} from "../assets/api";

export const manipulate = selector({
    key:'filterPricing',
    get: ({ get })  => {
        const state = get(availablePricing);

        return api.filter(item => {
            return item.country === state
        });
    }
});