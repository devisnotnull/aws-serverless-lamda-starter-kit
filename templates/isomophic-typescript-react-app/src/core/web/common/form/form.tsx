import * as React from 'react'

import { IFormProps } from './form.props';
import { IErrors, IValues, IFormState } from './form.state';


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

    private haveErrors(errors: IErrors) {
        let haveError: boolean = false
        Object.keys(errors).map((key: string) => {
            if (errors[key].length > 0) {
                haveError = true
            }
        })
        return haveError
    }

    private handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault()
    }
}
