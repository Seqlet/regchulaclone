import { StudentType, Degree } from './enum';
import { RegisteredCourse } from './regiscourse';

export interface UserLoginInfo {
  user: {
    name: string;
    username: string;
    role: string;
    faculty: number;
    major: string;
    studentType: StudentType;
    degree: Degree;
    registeredCourses: RegisteredCourse[];
  };
  token: string;
}