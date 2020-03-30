import { Field } from './field';

export interface IFormProps {
    action: Function;
    children?: React.ReactElement<Field>[] | React.ReactElement<Field>[];
}
