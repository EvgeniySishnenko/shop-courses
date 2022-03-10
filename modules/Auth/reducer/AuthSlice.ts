import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refresh, registration } from "./actions";

const initialState: any = {
  user: { name: null, id: null },
  isAuth: false,
  isLoading: false,
  error: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.user.name = payload.user.email;
      state.user.id = payload.user.id;
      state.isAuth = true;
      state.isLoading = false;
      state.error = null;
    });

    builder.addCase(login.rejected, (state, action) => {
      console.log("Ошибка", action);
      state.error = "Ошибка"; // todo
    });

    builder.addCase(registration.pending, (state, action) => {
      // state.isLoading = true;
    });
    builder.addCase(registration.fulfilled, (state, action) => {
      console.log("fulfilled", action);
      // state.name = action.name;
      // state.password = action.password;
    });
    builder.addCase(registration.rejected, (state, action) => {
      console.log("Ошибка", action);
      state.error = "Ошибка"; // todo
    });

    builder.addCase(logout.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isAuth = false;
      state.isLoading = false;
      state.error = null;
      state.user.name = null;
      state.user.id = null;
    });
    builder.addCase(logout.rejected, (state, action) => {
      console.log("Ошибка", action);
      state.error = "Ошибка"; // todo
    });

    builder.addCase(refresh.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(refresh.fulfilled, (state, { payload }) => {
      state.user.name = payload.user.email;
      state.user.id = payload.user.id;
      state.isAuth = true;
      state.error = null;
    });

    builder.addCase(refresh.rejected, (state, action) => {
      console.log("Ошибка", action);
      state.error = "Ошибка"; // todo
    });
  },
});
export default AuthSlice.reducer;
