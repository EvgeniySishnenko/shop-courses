import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICoursesResponse, IInitiateStateCourses } from "../modules/inerfaces";

const initialState: IInitiateStateCourses = {
  data: null,
  isLoading: false,
  errors: null,
  courseSingle: null,
};

const prepareCoursesState = (
  state: IInitiateStateCourses,
  { payload }: PayloadAction<ICoursesResponse>
) => {
  const { data } = payload;
  Object.assign(state, {
    data,
  });
};

const prepareCourseSingleState = (
  state: IInitiateStateCourses,
  { payload }: PayloadAction<ICoursesResponse>
) => {
  console.log();

  Object.assign(state, {
    courseSingle: payload,
  });
};

export const CoursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: { resetState: prepareCoursesState },
  extraReducers: (builder) => {},
});

export const CourseSingleSlice = createSlice({
  name: "courseSingle",
  initialState,
  reducers: { resetState: prepareCourseSingleState },
  extraReducers: (builder) => {},
});
