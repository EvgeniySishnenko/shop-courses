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

export const getIsEditCourse = createSelector(
  (state: RootState) => state.courseSingle,
  (courseSingle) => {
    return Boolean(courseSingle.editCourse);
  }
);
export const getIsLoading = createSelector(
  (state: RootState) => state.courseSingle.isLoading,
  (isLoading) => {
    return isLoading;
  }
);
