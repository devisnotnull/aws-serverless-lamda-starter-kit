import * as React from 'react';

/* The available editors for the field */
type Editor = 'textbox' | 'multilinetextbox' | 'dropdown' | 'multilinefreeform';

export interface IFieldProps {
    id: string;
    label?: string;
    type?: string;
    editor?: Editor;
    options?: string[];
    value?: any;
    default?: any;
    required?: boolean;
    hidden?: boolean;
    validationRegex?: string;
    updateAction?: (id: string, payload: string | number) => {};
}

export interface IFieldInternalProps {
    multi: string[];
}

export class Field extends React.PureComponent<IFieldProps, IFieldInternalProps> {
    constructor(props: IFieldProps) {
        super(props);
        this.state = {
            multi: [],
        };
        const { id, value, updateAction } = this.props;
        if (updateAction) updateAction(id, value);
    }

    setFreeFormInput(state: string[]) {
        this.setState({ multi: state });
    }

    formatType(value: string, type?: string): string | number {
        if (type === 'number') return Number(value);
        return value;
    }

    render() {
        const { id, label, editor, value, options, updateAction, type, hidden } = this.props;

        if (updateAction) updateAction(id, value);

        return (
            <div className="form-group">
                {label && !hidden && (
                    <div>
                        <label htmlFor={id}>{label}</label>
                    </div>
                )}

                {editor!.toLowerCase() === 'textbox' && (
                    <input
                        id={id}
                        type={hidden ? 'hidden' : 'text'}
                        value={value}
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                            updateAction &&
                            updateAction(id, this.formatType(e.currentTarget.value, type))
                        }
                        onBlur={(e: React.FormEvent<HTMLInputElement>) =>
                            updateAction &&
                            updateAction(id, this.formatType(e.currentTarget.value, type))
                        }
                        className="form-control"
                    />
                )}

                {editor!.toLowerCase() === 'multilinetextbox' && (
                    <textarea
                        id={id}
                        hidden={hidden}
                        value={value}
                        onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
                            updateAction &&
                            updateAction(id, this.formatType(e.currentTarget.value, type))
                        }
                        onBlur={(e: React.FormEvent<HTMLTextAreaElement>) =>
                            updateAction &&
                            updateAction(id, this.formatType(e.currentTarget.value, type))
                        }
                        className="form-control"
                    />
                )}

                {editor!.toLowerCase() === 'dropdown' && (
                    <select
                        id={id}
                        name={id}
                        hidden={hidden}
                        value={value}
                        onChange={(e: React.FormEvent<HTMLSelectElement>) =>
                            updateAction &&
                            updateAction(id, this.formatType(e.currentTarget.value, type))
                        }
                        onBlur={(e: React.FormEvent<HTMLSelectElement>) =>
                            updateAction &&
                            updateAction(id, this.formatType(e.currentTarget.value, type))
                        }
                        className="form-control"
                    >
                        {options &&
                            options.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                    </select>
                )}

                {editor!.toLowerCase() === 'multilinefreeform' && (
                    <React.Fragment>
                        <textarea
                            id={id}
                            hidden={hidden}
                            value={value}
                            onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {
                                this.setFreeFormInput(e.currentTarget.value.split(','));
                                updateAction &&
                                    updateAction(id, this.formatType(e.currentTarget.value, type));
                            }}
                            onBlur={(e: React.FormEvent<HTMLTextAreaElement>) => console.info(e)}
                            className="form-control"
                        />
                        {this.state.multi.map((item) => (
                            <div>{item}</div>
                        ))}
                    </React.Fragment>
                )}
            </div>
        );
    }
}
