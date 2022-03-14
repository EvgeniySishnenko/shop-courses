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

export interface IInitialStateCourses {
  data: ICoursesResponse | null;
  isLoading: boolean;
  errors: unknown;
}

export interface ISingleCourseInitialState
  extends Omit<IInitialStateCourses, "data"> {
  courseSingle: ICourse | null;
}
