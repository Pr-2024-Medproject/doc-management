export type FieldMetaData = {
    min: number;
    max: number;
    placeholder: string;
    initial: string;
}

export type Fields<T> = {
    [key in keyof T]: FieldMetaData;
};
