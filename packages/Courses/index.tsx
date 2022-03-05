import Layout from "@packages/ui/Layout";
import { Typography } from "@mui/material";
import { CardCourses } from "./CardCourses";

const CoursesContainer = () => {
  return (
    <Layout title="Курсы">
      <Typography variant="h3" component="div" gutterBottom>
        Курсы
      </Typography>
      <CardCourses />
    </Layout>
  );
};

export default CoursesContainer;
