import { createSlice } from "@reduxjs/toolkit";
import {
  checkTokenForResetPwd,
  login,
  logout,
  refresh,
  registration,
  reset,
  resetPwd,
} from "./actions";

const initialState: any = {
  user: null,
  isAuth: false,
  isLoading: false,
  sendMail: false,
  error: null,
  inputError: null,
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
      state.isAuth = true;
      state.isLoading = false;
      state.error = null;
      Object.assign(state, {
        user: {
          email: payload.user.email,
          id: payload.user.id,
          isActivated: payload.user.isActivated,
        },
      });
    });

    builder.addCase(login.rejected, (state, action) => {
      state.error = "Ошибка"; // todo
    });

    builder.addCase(registration.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(registration.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(registration.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "Ошибка"; // todo
    });

    builder.addCase(logout.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isAuth = false;
      state.isLoading = false;
      state.error = null;
      state.user = null;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.error = "Ошибка"; // todo
    });

    builder.addCase(refresh.pending, (state, action) => {});
    builder.addCase(refresh.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.error = null;
      Object.assign(state, {
        user: {
          email: payload.user.email,
          id: payload.user.id,
          isActivated: payload.user.isActivated,
        },
      });
    });

    builder.addCase(refresh.rejected, (state, action) => {
      state.error = "Ошибка"; // todo
    });

    builder.addCase(reset.fulfilled, (state, { payload }) => {
      Object.assign(state, {
        sendMail: payload.sendMail,
        token: payload.token,
      });
    });

    builder.addCase(reset.rejected, (state, { payload }) => {
      Object.assign(state, {
        inputError: { field: "email", message: payload.response.data.error },
      });
    });

    builder.addCase(resetPwd.fulfilled, (state, { payload }) => {
      Object.assign(state, {
        resetPwd: payload.resetPwd,
      });
    });

    builder.addCase(resetPwd.rejected, (state, { payload }) => {
      Object.assign(state, {
        inputError: { field: "password", message: payload.response.data.error },
      });
    });
    builder.addCase(checkTokenForResetPwd.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(checkTokenForResetPwd.fulfilled, (state, { payload }) => {
      Object.assign(state, {
        checkStatusToken: payload.checkStatusToken,
      });
      state.isLoading = false;
    });

    builder.addCase(checkTokenForResetPwd.rejected, (state, action) => {
      state.error = "Ошибка"; // todo
    });
  },
});
export default AuthSlice.reducer;
