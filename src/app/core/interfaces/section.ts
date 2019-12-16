export interface Section {
    sectionNumber: number;
    startTime: Date;
    endTime: Date;
    room: string;
    building: string;
    instructor: string;
    capacity: number;
    enrolledStudent: string[];
  }