export interface Fields {
    [key: string]: {
        min: number;
        max: number;
        placeholder: string;
        initial: string | number | Date;
    }
}

