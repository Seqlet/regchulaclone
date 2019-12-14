export interface UserDoc {
  _id: string;
  name: string;
  username: string;
  password: string;
  role: string;
  salt: string;
  faculty: number;
  major: string;
  studentType: string;
  degree: string;
  registeredCourses: RegisteredCourse[];
}
export interface RegisteredCourse {
  data: string | ICourse;
  sectionNumber: number;
  grade: string;
  status: string;
}
export interface ICourse {
  _id: string;
  uuid: string;
  year: string;
  semester: string;
  courseNumber: string;
  midtermDate: Date;
  finalDate: Date;
  name: string;
  shortName: string;
  engName: string;
  studentType: string;
  faculty: number;
  requirement: string[];
  credit: number;
  section: number[];
  requiredDegree: string;
}
