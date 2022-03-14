import { API_URL } from "@core/http";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import CoursesApi from "../api/CoursesApi";

// export const getCourses = createAsyncThunk(
//   "courses/getCourses",
//   async (_, { rejectWithValue }) => {
//     try {
//       // const response = await CoursesApi.getCourses();
//       const response = await axios.get<any>(`${API_URL}/courses`, {
//         withCredentials: true,
//       });
//       console.log("response", response.data);

//       return response.data;
//     } catch (error) {
//       rejectWithValue(error);
//     }
//   }
// );
