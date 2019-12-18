import { StudentType, Semester, RequiredDegree } from './enum';
import { Section } from './section';

export interface ICourseInputDTO {
    uuid: string;
    year: string;
    semester: Semester;
    courseNumber: string;
    midtermDate: Date;
    finalDate: Date | null;
    name: string;
    shortName: string;
    engName: string;
    studentType: StudentType;
    faculty: number;
    requirement: string[];
    credit: number;
    section: Section[];
    requiredDegree: RequiredDegree;
  }