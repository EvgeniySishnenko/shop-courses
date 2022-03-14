import { RootState } from "@core/store";
import { createSelector } from "@reduxjs/toolkit";

export const getCourses = createSelector(
  (state: RootState) => state.courses,
  ({ courses }) => {
    return courses;
  }
);

export const getSingleCourse = createSelector(
  (state: RootState) => state.courseSingle,
  ({ courseSingle }) => {
    return courseSingle;
  }
);
