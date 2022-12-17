import { PartialType } from '@nestjs/mapped-types';
import { CreateArticle } from './create-articles.dto';

export class UpdateFaqDto extends PartialType(CreateArticle) {}
