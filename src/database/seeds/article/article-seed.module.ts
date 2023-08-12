import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from 'src/articles/entities/article.entity';
import { ArticleSeedService } from './article-seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  providers: [ArticleSeedService],
  exports: [ArticleSeedService],
})
export class ArticleSeedModule {}
