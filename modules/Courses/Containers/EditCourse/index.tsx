import { useSelector } from "react-redux";
import Layout from "@modules/ui/Layout";
import { Alert, Typography } from "@mui/material";
import {
  getSingleCourse,
  getIsEditCourse,
  getIsLoading,
} from "@modules/Courses/reducer/selectors";
import { Form } from "@shared/Form";
import { ETypeForm } from "@shared/Form/models/enums";
import { useAppDispatch } from "@core/hooks/redux";
import formContent from "@modules/Courses/consts/course-form-const";
import { getIsAuth } from "@modules/Auth/reducer/selectors";
import { editCourse } from "@modules/Courses/reducer/actions";
import { useEffect } from "react";
import { useRouter } from "next/router";

const EditCourse = () => {
  const course = useSelector(getSingleCourse);
  const isAuth = useSelector(getIsAuth);
  const isEditCourse = useSelector(getIsEditCourse);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleSubmitForm = (data: any) => {
    dispatch(editCourse(data));
  };

  useEffect(() => {
    if (isEditCourse) router.push("/courses");
  }, [isEditCourse]);

  return (
    <Layout title={`Редактирование курса ${course.title}`}>
      <Typography variant="h4" component="div" gutterBottom>
        {`Редактирование курса ${course.title}`}
      </Typography>
      {isAuth && (
        <Form
          onSubmitForm={handleSubmitForm}
          defaultValues={course}
          typeForm={ETypeForm.COURSE}
          formContent={formContent}
        />
      )}
    </Layout>
  );
};

export default EditCourse;
