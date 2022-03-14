import { FC } from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { CardCourses } from "../CardCourses";
import { getCourses, getIsEditCourses } from "../../reducer/selectors";
import { ICourse } from "@modules/Courses/modules/inerfaces";

export const CoursesList: FC = () => {
  const courses = useSelector(getCourses);
  const isEditCourses = useSelector(getIsEditCourses);
  return (
    <Grid>
      {courses.map((course: ICourse) => (
        <CardCourses
          key={course._id}
          course={course}
          isEditCourses={isEditCourses}
        />
      ))}
    </Grid>
  );
};
