export interface IValues {
    [key: string]: any
}

export interface IErrors {
    [key: string]: string
}

export interface IFormState {
    values: IValues
    errors: IErrors
    submitSuccess?: boolean
}