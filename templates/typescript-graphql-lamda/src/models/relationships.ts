export enum EntityMappings {
    OPTION = 'options',
    OPTION_GROUP = 'options',
    PRODUCT = 'product',
    VARIANT = 'variant',
    RANGE = 'range'
}

export enum RelationshipMappings {
    PRODUCT_OPTION = 'product-option',
    PRODUCT_RECOMMENDATION = 'product-reccommendtion',
    PRODUCT_VARIANT = 'product-variant',
    //
    VARIANT_OPTION = 'variant-option',
    //
    OPTION_GROUP_OPTION = 'option-group-option',
    //
    RANGE_PRODUCT = 'range-product',
}

export const mappings = {
    [EntityMappings.OPTION_GROUP]: {
        [RelationshipMappings.OPTION_GROUP_OPTION]: EntityMappings.OPTION,
    },
    [EntityMappings.PRODUCT]: {
        [RelationshipMappings.PRODUCT_OPTION]: EntityMappings.OPTION,
        [RelationshipMappings.PRODUCT_RECOMMENDATION]: EntityMappings.PRODUCT,
        [RelationshipMappings.PRODUCT_VARIANT]: EntityMappings.VARIANT,
    },
    [EntityMappings.VARIANT]: {
        [RelationshipMappings.VARIANT_OPTION]: EntityMappings.OPTION,
    },
    [EntityMappings.RANGE]: {
        [RelationshipMappings.RANGE_PRODUCT]: EntityMappings.PRODUCT,
    },
}
