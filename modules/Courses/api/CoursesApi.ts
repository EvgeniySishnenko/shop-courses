import api from "@core/http";
import { AxiosResponse } from "axios";
import { ICourse, IEditCourseResponse } from "../modules/interfaces";

export default class CoursesApi {
  static async editCourse(
    params: ICourse
  ): Promise<AxiosResponse<IEditCourseResponse>> {
    return api.post<IEditCourseResponse>("courses/edit", params);
  }

  static async removeCourse(id: {
    id: { id: string };
  }): Promise<AxiosResponse<IEditCourseResponse>> {
    return api.post<IEditCourseResponse>("courses/remove", id);
  }
}
