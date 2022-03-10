import Layout from "@modules/ui/Layout";
import { Typography } from "@mui/material";
import axios from "axios";
import { API_URL } from "@core/http";
import ProfilehApi from "./api/ProfileApi";
// import { Form } from "./Form";

export const ProfileContainer = () => {
  const start = async () => {
    const response = await ProfilehApi.fetchUser();
  };
  start();
  return (
    <Layout title="Редактирование личных данных">
      <Typography variant="h4" component="div" gutterBottom>
        Редактирование Личных данных
      </Typography>
      {/* <Form /> */}
    </Layout>
  );
};
