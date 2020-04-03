export interface IUser {
    id: string;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export interface IUserArrayResponsePayload {
    users:
        | {
              data: IUser[];
              meta: {
                  totalCount?: number;
                  __typeName?: string;
              };
          }
        | undefined;
}

export interface IUserSingularResponsePayload {
    user: IUser | undefined;
}
