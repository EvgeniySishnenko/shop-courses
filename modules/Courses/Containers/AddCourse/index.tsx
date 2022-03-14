import { useAppDispatch } from "@core/hooks/redux";
import { getIsAuth } from "@modules/Auth/reducer/selectors";
import Layout from "@modules/ui/Layout";
import { Typography } from "@mui/material";
import { Form } from "@shared/Form";
import { ETypeForm } from "@shared/Form/models/enums";
import { useSelector } from "react-redux";
import formContent from "@modules/Courses/consts/course-form-const";

export const AddCourseContainer = () => {
  const isAuth = useSelector(getIsAuth);
  const dispatch = useAppDispatch();

  const handleSubmitForm = (data: any) => {
    // dispatch(editCourse(data));
  };

  return (
    <Layout title="Добавление курса">
      <Typography variant="h4" component="div" gutterBottom>
        Добавление курса
      </Typography>
      {isAuth && (
        <Form
          onSubmitForm={handleSubmitForm}
          typeForm={ETypeForm.ADD_COURSE}
          formContent={formContent}
        />
      )}
    </Layout>
  );
};
