import Layout from "@packages/ui/Layout";
import { Typography } from "@mui/material";
// import { Form } from "./Form";

export const ProfileContainer = () => {
  return (
    <Layout title="Редактирование личных данных">
      <Typography variant="h4" component="div" gutterBottom>
        Редактирование Личных данных
      </Typography>
      {/* <Form /> */}
    </Layout>
  );
};
