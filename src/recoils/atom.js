import { atom } from 'recoil';
import { api } from '../assets/api';
export const availablePricing = atom({
    key: 'listOfAvailablePricing',
    default: api
});