import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Article } from './entities/article.entity';
import { EntityCondition } from '../utils/types/entity-condition.type';
import { NullableType } from '../utils/types/nullable.type';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private articlesRepository: Repository<Article>,
  ) {}
  create(createArticleDto: CreateArticleDto): Promise<Article> {
    const newArticle = this.articlesRepository.save(
      this.articlesRepository.create(createArticleDto),
    );

    return newArticle;
  }

  findAll() {
    return this.articlesRepository.find();
  }

  findOne(fields: EntityCondition<Article>): Promise<NullableType<Article>> {
    return this.articlesRepository.findOne({
      where: fields,
    });
  }

  update(id: Article['id'], payload: DeepPartial<Article>): Promise<Article> {
    return this.articlesRepository.save(
      this.articlesRepository.create({
        id,
        ...payload,
      }),
    );
  }

  remove(id: number) {
    return this.articlesRepository.delete(id);
  }
}
