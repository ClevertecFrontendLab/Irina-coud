export const LINK_HOST = 'https://strapi.cleverland.by';

export const CHECK_LATIN_LETTERS = /[a-zA-Z]/;
export const CHECK_NUMBERS = /[\d]/;
export const CHECK_MIN_LENGTH_PASSWORD = /[a-zA-Zа-яА-Я\d].{7,}/;
export const CHECK_CAPITAL_LETTER = /[А-ЯA-Z]/;
export const CHECK_BY_PHONE_NUMBER = /^\+?375((\s\(33\)\s\d{3}-\d{2}-\d{2})|(\s\(29\)\s\d{3}-\d{2}-\d{2})|(\s\(44\)\s\d{3}-\d{2}-\d{2})|(\s\(25\)\s\d{3}-\d{2}-\d{2}))\s*$/;
export const CHECK_EMAIL = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;