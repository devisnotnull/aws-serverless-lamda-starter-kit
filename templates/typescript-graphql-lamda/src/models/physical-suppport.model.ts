import { IGenericLink, IReferenceUriLink } from './common';

export interface IPhysicalVariantsOneOfEach {
    list: IReferenceUriLink[];
}

export interface IPhysicalSupports {
    id: string;
    name: string;
    _links: {
        self: IGenericLink;
        isBasedOn: IGenericLink;
        physicalVariants: IGenericLink[];
    };
    tags: [];
    optionSpace: {
        oneOfEach: IPhysicalVariantsOneOfEach[];
    };
}
