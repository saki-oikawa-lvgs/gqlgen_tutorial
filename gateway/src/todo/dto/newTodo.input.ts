import { Field, InputType } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';

@InputType()
export class NewTodoInput {
  @Field()
  @MaxLength(30)
  id: string;

  @Field()
  @MaxLength(30)
  text: string;

  @Field()
  done: boolean;
}
