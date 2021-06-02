import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { StudentService } from './student.service';
import { StudentInput } from './student.input';
import { Student } from './student.entity';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query((returns) => [StudentType])
  async students(): Promise<Student[]> {
    return await this.studentService.getStudents();
  }

  @Query((returns) => StudentType)
  async student(@Args('id') id: string): Promise<Student> {
    return await this.studentService.getStudent(id);
  }

  @Mutation((returns) => StudentType)
  async createStudent(
    @Args('createStudentInput') studentInput: StudentInput,
  ): Promise<Student> {
    return await this.studentService.createStudent(studentInput);
  }
}
