import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
} from '@nestjs/common'
import { ArticlesService } from './articles.service'
import { CreateArticle } from './dto/create-articles.dto'

@Controller('articles')
export class ArticlesController {
    constructor(private readonly articleService: ArticlesService) {}

    @Post()
    getHello(@Body() body: CreateArticle): string {
        return this.articleService.getHello()
    }
    @Get()
    findAll() {
        return `This action returns all cats`
    }

    @Get(':id')
    findOne(@Param('id') id: string) {               return `This action returns a #${id} cat`
    }

    //   @Put(':id')
    //   update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    //     return `This action updates a #${id} cat`;
    //   }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`
    }
}
