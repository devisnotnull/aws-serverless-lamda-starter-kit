import { ChildProps } from "react-apollo";

import { IPost } from "@core/models/post";

// GraphQL payload response
export interface IPostResult {
    posts?: IPost[];
}

// The props we expect to be passed directly to this component.
export interface OwnProps {}

// Define the Props for the Repo component using React Apollo's
// ChildProps generic inteface with the expected OptionsResult.
export type Props = ChildProps<OwnProps, IPostResult>;