import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { Connection } from 'typeorm';
import { InjectConnection } from 'typeorm-typedi-extensions';

import { ITagModel } from '../models/tags.model';
import { Tag as TagSchema } from '../entities/tags.schema';
import { TagInput } from '../input/tags.input';
import { ITagService, service } from '../service/tags.service';

@Resolver(TagSchema)
export class TagResolver {
    private readonly service: ITagService = service(this.connection);

    constructor(@InjectConnection('primary') private readonly connection: Connection) {}

    @Query(_type => [TagSchema])
    async getAllTags(): Promise<ITagModel[]> {
        return this.service.getAll();
    }

    @Query(_type => TagSchema)
    async getTagById(@Arg('uuid') id: string): Promise<ITagModel> {
        return this.service.getById(id);
    }

    @Mutation(_type => TagSchema)
    async addTag(@Arg('data') data: TagInput): Promise<Partial<ITagModel>> {
        return this.service.create(data);
    }

    @Mutation(_type => TagSchema)
    async deleteTag(@Arg('data') uuid: string): Promise<Boolean> {
        return this.service.delete(uuid);
    }
}
