import { CourseUserStatus, Grade } from "./enum";
import { ICourseInputDTO } from "./icourse";


export interface RegisteredCourse {
    data: ICourseInputDTO | string; 
    // เป็นได้สองเคส ถ้า endpoint /user จะเป็น ICourseInputDTO แต่ถ้า /user/info จะมีแค ObjectID
    sectionNumber: number;
    grade: Grade;
    status: CourseUserStatus;
  }