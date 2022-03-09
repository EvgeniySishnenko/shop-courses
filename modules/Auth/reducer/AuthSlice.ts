import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  name: null,
  password: null,
  error: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(fetchTodos.pending, (state, action) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(fetchTodos.fulfilled, (state, action) => {
    //   todosAdapter.setAll(state.todos, action.payload);
    //   state.isLoading = false;
    // });
    // builder.addCase(fetchTodos.rejected, (state, action) => {
    //   state.error = "Ошибка"; // todo
    // });
  },
});
export default AuthSlice.reducer;
