export const ALLOWED_LANGUAGES = ["FR", "DE", "EN", "JP"];
export type Language = typeof ALLOWED_LANGUAGES[number];

interface Word {
    id: string;
    name: string;
    translations: {[key: string]: string}
}

interface List {
    id: string;
    name: string;
    words: Word[];
}

export interface DataContext {
    lists: List[];
}
