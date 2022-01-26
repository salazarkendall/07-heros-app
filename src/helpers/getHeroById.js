import { heros } from '../data/heros';

export const getHerosById = (id) => heros.find((hero) => hero.id === id);
