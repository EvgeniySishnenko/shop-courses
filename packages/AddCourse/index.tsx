import Layout from "@packages/ui/Layout";
import { Typography } from "@mui/material";
import { Form } from "./Form";

export const AddCourseContainer = () => {
  return (
    <Layout title="Добавление курса">
      <Typography variant="h4" component="div" gutterBottom>
        Добавление курса
      </Typography>
      <Form />
    </Layout>
  );
};
