export interface ICourse {
  _id: string;
  title: string;
  price: number;
  img: string;
  userId: string;
}

export interface ICoursesResponse {
  data: { courses: ICourse; userId: string };
}

export interface ICourseResponseResponse {
  course: ICourse;
}

export interface IInitiateStateCourses {
  data: ICoursesResponse | null;
  courseSingle: ICourse;
  isLoading: boolean;
  errors: unknown;
}
