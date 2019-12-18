import { Degree, StudentType } from './enum';
import { RegisteredCourse } from './regiscourse';

export interface IUser {
  name: string;
  username: string;
  role: string;
  faculty: number;
  major: string;
  studentType: StudentType;
  degree: Degree;
  registeredCourses: RegisteredCourse[];
}
