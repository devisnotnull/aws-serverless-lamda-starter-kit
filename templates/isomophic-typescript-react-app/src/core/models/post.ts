export interface IPost {
    id: string;
    title: string;
    body?: string;
}

export interface IPostArrayResponsePayload {
    posts:
        | {
              data: IPost[];
              meta: {
                  totalCount?: number;
                  __typeName?: string;
              };
          }
        | undefined;
}

export interface IPostSingularResponsePayload {
    post: IPost | undefined;
}
