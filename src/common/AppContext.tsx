type Language = 'FR' | "DE" | "EN" | "JP";

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
