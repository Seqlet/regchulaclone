import { Semester } from './enum';

export interface IAcademicYearDTO {
    year: string;
    semester: Semester;
    startDate: Date;
    endDate: Date;
    registrationStartDate: Date;
    registrationEndDate: Date;
    withdrawalStartDate: Date;
    withdrawalEndDate: Date;
  }