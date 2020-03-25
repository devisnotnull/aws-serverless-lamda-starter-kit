import * as React from 'react'
import { Field } from './field'

interface IFormProps {
    /* The http path that the form will be posted to */
    action: Function

    children?: React.ReactElement<Field>[] | React.ReactElement<Field>[]
}

export interface IValues {
    /* Key value pairs for all the field values with key being the field name */
    [key: string]: any
}

export interface IErrors {
    /* The validation error messages for each field (key is the field name */
    [key: string]: string
}

export interface IFormState {
    /* The field values */
    values: IValues

    /* The field validation error messages */
    errors: IErrors

    /* Whether the form has been successfully submitted */
    submitSuccess?: boolean
}

export class Form extends React.Component<IFormProps, IFormState> {
    constructor(props: IFormProps) {
        super(props)

        const errors: IErrors = {}
        const values: IValues = {}
        this.state = {
            errors,
            values,
        }

        this.onFormUpdate = this.onFormUpdate.bind(this)
    }

    public onFormUpdate(id: string, payload: any) {
        const values = this.state.values
        values[id] = payload
        this.setState({
            values: values,
        })
    }

    render() {
        const { submitSuccess, errors } = this.state

        const { action } = this.props

        let newChildren: any[] = []

        if (Array.isArray(this.props.children)) {
            newChildren = this.props.children.map(child => {
                const extendedChild = React.cloneElement(child as React.ReactElement<any>, {
                    updateAction: this.onFormUpdate,
                })
                return extendedChild
            })
        }

        return (
            <form onSubmit={this.handleSubmit} noValidate={true}>
                <div className="container">
                    {newChildren}

                    <div className="form-group">
                        <button
                            type="submit"
                            disabled={this.haveErrors(errors)}
                            onClick={() => action(this.state.values)}
                        >
                            Submit
                        </button>
                    </div>

                    {submitSuccess && (
                        <div className="alert alert-info" role="alert">
                            The form was successfully submitted!
                        </div>
                    )}

                    {submitSuccess === false && !this.haveErrors(errors) && (
                        <div className="alert alert-danger" role="alert">
                            Sorry, an unexpected error has occurred
                        </div>
                    )}

                    {submitSuccess === false && this.haveErrors(errors) && (
                        <div className="alert alert-danger" role="alert">
                            Sorry, the form is invalid. Please review, adjust and try again
                        </div>
                    )}
                </div>
            </form>
        )
    }

    /**
     * Returns whether there are any errors in the errors object that is passed in
     * @param {IErrors} errors - The field errors
     */
    private haveErrors(errors: IErrors) {
        let haveError: boolean = false
        Object.keys(errors).map((key: string) => {
            if (errors[key].length > 0) {
                haveError = true
            }
        })
        return haveError
    }

    /**
     * Handles form submission
     * @param {React.FormEvent<HTMLFormElement>} e - The form event
     */
    private handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault()
    }
}
