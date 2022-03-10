import { API_URL } from "@core/http";
import { AuthResponse } from "@core/models/respons/AuthResponse";
import AuthApi from "@modules/Auth/api/AuthApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk<any, any>(
  "auth/login",
  async (params, { rejectWithValue }) => {
    try {
      const response = await AuthApi.login(params);
      localStorage.setItem("token", response.data.accessToken);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const registration = createAsyncThunk<any, any>(
  "auth/registration",
  async (params, { rejectWithValue }) => {
    try {
      const response = await AuthApi.registration(params);
      localStorage.setItem("token", response.data.accessToken);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await AuthApi.logout();
      localStorage.removeItem("token");
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const refresh = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<AuthResponse>(
        `${API_URL}/auth/refresh`,
        { withCredentials: true }
      );
      localStorage.setItem("token", response.data.accessToken);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
