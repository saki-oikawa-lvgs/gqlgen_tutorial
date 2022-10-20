// src/todo/models/todo.models.ts
import { Field, ID, ObjectType } from '@nestjs/graphql';

// export enum TodoStatus {
//   NEW,
//   IN_PROGRESS,
//   COMPLETE,
// }
// // enumを使用する際は registerEnumType でenumを登録しなくてはならない
// // https://docs.nestjs.com/graphql/unions-and-enums#enums
// registerEnumType(TodoStatus, {
//   name: 'TodoStatus',
// });

// ObjectTypeデコレータを使用することで、定義したmodelを元にschemaが自動生成される
@ObjectType()
export class Todo {
  // schame上、ID型にしたいため、ReturnTypeFuncを引数に与える
  // ReturnTypeFuncを引数に与えない場合、idの型はString型になる
  @Field((type) => ID)
  id: number;

  // ここはString型で良いのでReturnTypeFuncを引数に与えない
  @Field()
  text: string;

  // nullを許容するためオプションを指定
  // オプションを指定しない限り、nullは許容されない（String!型になる）
  @Field()
  done: boolean;

  // // GraphQLに存在しない型(TodoStatus)を指定する場合は、ReturnTypeFuncを引数に与える
  // @Field((type) => TodoStatus)
  // status: TodoStatus;

  // @Field()
  // createdAt: Date;

  // @Field()
  // updatedAt: Date;
}
