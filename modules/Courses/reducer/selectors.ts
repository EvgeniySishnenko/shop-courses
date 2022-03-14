import { RootState } from "@core/store";
import { createSelector } from "@reduxjs/toolkit";

export const getCourses = createSelector(
  (state: RootState) => state.courses.data,
  ({ courses }) => {
    return courses;
  }
);
export const getIsEditCourses = createSelector(
  (state: RootState) => state.courses.data,
  (state: RootState) => state.auth.user?.id,
  (authUserId, userId) => {
    return authUserId === userId;
  }
);

export const getSingleCourse = createSelector(
  (state: RootState) => state.courseSingle,
  ({ courseSingle }) => {
    return courseSingle;
  }
);
