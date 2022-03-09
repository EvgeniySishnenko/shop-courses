import Layout from "@modules/ui/Layout";
import { Typography } from "@mui/material";
import { CardCourses } from "./CardCourses";

const CoursesContainer = () => {
  return (
    <Layout title="Курсы">
      <Typography variant="h4" component="div" gutterBottom>
        Курсы
      </Typography>
      <CardCourses />
    </Layout>
  );
};

export default CoursesContainer;
