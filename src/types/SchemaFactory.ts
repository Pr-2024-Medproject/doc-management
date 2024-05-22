export type Fields<T extends string> = {
    [key in T]: {
        min: number;
        max: number;
        placeholder: string;
        initial: string;
    };
};
