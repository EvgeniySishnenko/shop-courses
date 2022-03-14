import { createAsyncThunk } from "@reduxjs/toolkit";
import CoursesApi from "../api/CoursesApi";
import { ICourse, IEditCourseResponse } from "../modules/interfaces";

export const editCourse = createAsyncThunk<IEditCourseResponse, ICourse>(
  "courses/editCourse",
  async (params, { rejectWithValue }) => {
    try {
      const response = await CoursesApi.editCourse(params);
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const removeCourse = createAsyncThunk<
  IEditCourseResponse,
  { id: string }
>("courses/removeCourse", async (id, { rejectWithValue }) => {
  try {
    const response = await CoursesApi.removeCourse({ id });
    return response.data;
  } catch (error) {
    rejectWithValue(error);
  }
});
