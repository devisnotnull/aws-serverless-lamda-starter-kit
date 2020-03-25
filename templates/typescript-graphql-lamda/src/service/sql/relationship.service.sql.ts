import { Connection } from 'typeorm';

import { IDeleteResult } from '../../models/delete.model';

import { Range } from '../../entities/range.schema';
import { Product } from '../../entities/product.schema';
import { OptionGroup } from '../../entities/option-group.schema';
import { Option } from '../../entities/option.schema';
import { Variant } from '../../entities/variant.schema';

import { IRelationshipItemModel } from '../../models/relationship.model';
import { IRelationshipService } from '../relationship.service';

import { IQueryMultiple, IQuerySingular } from '../query'
import { RelationshipItem } from '../../entities/relationship.schema';

import { RelationshipItemInput } from '../../input/relationship.input';

export enum EntityMappings {
    OPTION = 'options',
    OPTION_GROUP = 'options',
    PRODUCT = 'product',
    VARIANT = 'variant',
    RANGE = 'range',
    THEME = 'theme',
    ASSET = 'themeAsset'
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
    //
    THEME_ASSET = 'theme-asset',
}

const mappings = {
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

export class SqlRelationshipService implements IRelationshipService {
    private connection: Connection;

    constructor(connection: Connection) {
        this.connection = connection;
    }

    public async getAll(options?: IQueryMultiple): Promise<IRelationshipItemModel[]> {
        const saved = await this.connection.getRepository(RelationshipItem).find();
        return saved;
    }

    public async getById(uuid: string, options?: IQuerySingular): Promise<IRelationshipItemModel> {
        const saved = await this.connection.getRepository(RelationshipItem).findOne({ uuid });
        return saved;
    }

    public async getByParentUUID(uuid: string, options?: IQuerySingular): Promise<Array<IRelationshipItemModel>> {
        const saved = await this.connection.getRepository(RelationshipItem).find({ parentUuid: uuid });
        return saved;
    }

    public async getByChildUUID(uuid: string, options?: IQuerySingular): Promise<Array<IRelationshipItemModel>> {
        const saved = await this.connection.getRepository(RelationshipItem).find({ childUuid: uuid });
        return saved;
    }

    public async getByParentType(type: string, options?: IQuerySingular): Promise<Array<IRelationshipItemModel>> {
        const saved = await this.connection.getRepository(RelationshipItem).find({ where: { parentType: type }});
        return saved;
    }

    public async addRelationship(create: RelationshipItemInput): Promise<Partial<IRelationshipItemModel>> {

        switch (create.parentType) {
            case EntityMappings.OPTION:
                const options = await this.connection.getRepository(Option).find({
                    where: [{ uuid: `${create.parentUuid}` }]
                });
                if (options.length !== 1) return Promise.reject('Bad product payload');
                break;

            case EntityMappings.OPTION_GROUP:
                const optionGroups = await this.connection.getRepository(OptionGroup).find({
                    where: [{ uuid: `${create.parentUuid}` }]
                });
                if (optionGroups.length !== 1) return Promise.reject('Bad product payload');
                break;

            case EntityMappings.VARIANT:
                const variants = await this.connection.getRepository(Variant).find({
                    where: [{ uuid: `${create.parentUuid}` }]
                });
                if (variants.length !== 1) return Promise.reject('Bad product payload');
                break;

            case EntityMappings.PRODUCT:
                const products = await this.connection.getRepository(Product).find({
                    where: [{ uuid: `${create.parentUuid}` }]
                });
                if (products.length !== 1) return Promise.reject('Bad product payload');
                break;

             case EntityMappings.RANGE:
                const ranges = await this.connection.getRepository(Range).find({
                    where: [{ uuid: `${create.parentUuid}` }]
                });
                if (ranges.length !== 1) return Promise.reject('Bad product payload');
                break;

            default:
              console.log('Sorry, WE HAVE NO RELATIONS');
        }
        
        const saved = await this.connection.getRepository(RelationshipItem).findOne(
            {
                parentUuid: create.parentUuid,
                parentType: create.parentType,
                locale: create.locale,
                brand: create.brand,
                childUuid: create.childUuid,
            }
        );

        if (saved) return Promise.reject('Relationship already exists');

        const relationshipItem: RelationshipItem = new RelationshipItem();
        relationshipItem.childUuid = create.childUuid;
        relationshipItem.relationshipType = create.relationshipType;
        relationshipItem.brand = create.brand;
        relationshipItem.locale = create.locale;
        relationshipItem.weight = create.weight;
        relationshipItem.weight = create.weight;
        relationshipItem.parentUuid = create.parentUuid;
        relationshipItem.parentType = create.parentType;

        const savedItem: RelationshipItem = await this.connection.getRepository(RelationshipItem).save(relationshipItem)

        return savedItem;
    }

    public async deleteItem(uuid: string): Promise<IDeleteResult> {
        const saved = await this.connection.getRepository(RelationshipItem).delete({ uuid });
        return {
            sucess: saved.affected == 1,
            affected: saved.affected
        }
    }

    public async delete(uuid: string): Promise<IDeleteResult> {
        const saved = await this.connection.getRepository(RelationshipItem).delete({ uuid });
        return {
            sucess: saved.affected == 1,
            affected: saved.affected
        }
    }
}
