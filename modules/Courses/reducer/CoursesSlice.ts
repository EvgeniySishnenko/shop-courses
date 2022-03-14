import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ICourseResponseResponse,
  ICoursesResponse,
  IInitialStateCourses,
  ISingleCourseInitialState,
} from "../modules/inerfaces";

const coursesInitialState: IInitialStateCourses = {
  data: null,
  isLoading: false,
  errors: null,
};

const singleCourseInitialState: ISingleCourseInitialState = {
  isLoading: false,
  errors: null,
  courseSingle: null,
};

const prepareCoursesState = (
  state: IInitialStateCourses,
  { payload }: PayloadAction<ICoursesResponse>
) => {
  const { data } = payload;
  Object.assign(state, {
    data,
  });
};

const prepareCourseSingleState = (
  state: ISingleCourseInitialState,
  { payload }: PayloadAction<ICourseResponseResponse>
) => {
  Object.assign(state, {
    courseSingle: payload,
  });
};

export const CoursesSlice = createSlice({
  name: "courses",
  initialState: coursesInitialState,
  reducers: { resetState: prepareCoursesState },
  extraReducers: (builder) => {},
});

export const CourseSingleSlice = createSlice({
  name: "courseSingle",
  initialState: singleCourseInitialState,
  reducers: { resetState: prepareCourseSingleState },
  extraReducers: (builder) => {},
});
