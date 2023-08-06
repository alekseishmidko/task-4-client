import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchLogin = createAsyncThunk(
  "account/fetchLogin",
  async ({ email, password }, thunkAPI) => {
    try {
      // Выполнение запроса на сервер с использованием логина и пароля
      const response = await axios.post("auth/login", {
        email,
        password,
      });

      // Возвращение полученных данных в виде результата выполнения thunk-экшена
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      // Обработка ошибок, если необходимо
      // throw error;
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const fetchRegistration = createAsyncThunk(
  "account/fetchRegistration",
  async ({ email, password, name }, thunkAPI) => {
    try {
      // Выполнение запроса на сервер с использованием логина и пароля
      const response = await axios.post("auth/register", {
        email,
        password,
        name,
      });

      // Возвращение полученных данных в виде результата выполнения thunk-экшена
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      // Обработка ошибок, если необходимо
      return thunkAPI.rejectWithValue(error.response.data);
      // throw error;
    }
  }
);
// export const postCurrent = createAsyncThunk(
//   "account/postCurrent",
//   async ({ formData }, thunkAPI) => {
//     try {
//       console.log(formData, "post");
//       // Выполнение запроса на сервер с использованием переданного токена
//       const response = await axios.post("account/current", formData);
//       // console.log(response.data, "postcurrent ");
//       return response.data;
//     } catch (error) {
//       // console.log(error.response.data.message);
//       return thunkAPI.rejectWithValue(error.response.data.message);
//       // throw error;
//     }
//   }
// );
export const fetchBlock = createAsyncThunk(
  "auth/block",
  async (userIds, thunkAPI) => {
    try {
      // Выполнение запроса на сервер с использованием переданного токена
      const response = await axios.post("auth/block", userIds);
      console.log(response.data, "fetchBlock ");
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
      // throw error;
    }
  }
);
export const fetchUnBlock = createAsyncThunk(
  "auth/unblock",
  async (userIDs, thunkAPI) => {
    try {
      // Выполнение запроса на сервер с использованием переданного токена
      const response = await axios.post("auth/unblock", userIDs);
      console.log(response.data, "fetchUnBlock ");
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
      // throw error;
    }
  }
);
export const fetchRemove = createAsyncThunk(
  "auth/remove",
  async (userIDs, thunkAPI) => {
    try {
      // Выполнение запроса на сервер с использованием переданного токена
      const response = await axios.post("auth/remove", userIDs);
      console.log(response.data, "fetchRemove ");
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
      // throw error;
    }
  }
);
const initialState = {
  data: [],
  userData: [],
  allUsers: [],
  isLoading: "loading",
  errors: null,
  message: "",
};
const accountSlice = createSlice({
  name: "accountSlice",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = [];
      state.userData = [];
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    // Login POST
    builder.addCase(fetchLogin.pending, (state) => {
      state.isLoading = "loading";
      state.errors = null;
      state.data = [];
      state.userData = [];
      state.allUsers = [];
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.isLoading = "loaded";
      state.errors = null;
      state.data = action.payload;
      state.userData = action.payload.updatedData;
      state.allUsers = action.payload.allUsers;
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.isLoading = "error";
      state.errors = action.error.message;
      state.data = [];
      state.userData = [];
      state.allUsers = [];
      state.message = action.payload.message;
    });
    // Registration POST
    builder.addCase(fetchRegistration.pending, (state) => {
      state.isLoading = "loading";
      state.errors = null;
      state.data = [];
      state.userData = [];
      state.allUsers = [];
    });
    builder.addCase(fetchRegistration.fulfilled, (state, action) => {
      state.isLoading = "loaded";
      state.errors = null;
      state.data = action.payload;
      state.userData = action.payload.userData;
      state.allUsers = action.payload.allUsers;
    });
    builder.addCase(fetchRegistration.rejected, (state, action) => {
      state.isLoading = "error";
      state.errors = action.error.message;
      state.data = [];
      state.userData = [];
      state.allUsers = [];
      state.message = action.payload.message;
    });
    // Block POST
    builder.addCase(fetchBlock.pending, (state) => {
      state.isLoading = "loading";
      state.errors = null;
      // state.data = null;
    });
    builder.addCase(fetchBlock.fulfilled, (state, action) => {
      state.isLoading = "loaded";
      state.errors = null;
      state.data = action.payload;
      state.allUsers = action.payload.allUsers;
      //
    });
    builder.addCase(fetchBlock.rejected, (state, action) => {
      state.isLoading = "error";
      state.errors = action.error.message;
      // state.data = null;
      // state.message = action.payload.message;
    });
    // UnBlock POST
    builder.addCase(fetchUnBlock.pending, (state) => {
      state.isLoading = "loading";
      state.errors = null;
      // state.data = null;
    });
    builder.addCase(fetchUnBlock.fulfilled, (state, action) => {
      state.isLoading = "loaded";
      state.errors = null;
      state.data = action.payload;
      state.allUsers = action.payload.allUsers;
    });
    builder.addCase(fetchUnBlock.rejected, (state, action) => {
      state.isLoading = "error";
      state.errors = action.error.message;
      // state.data = null;
      // state.message = action.payload.message;
    });
    // remove POST
    builder.addCase(fetchRemove.pending, (state) => {
      state.isLoading = "loading";
      state.errors = null;
      // state.data = null;
    });
    builder.addCase(fetchRemove.fulfilled, (state, action) => {
      state.isLoading = "loaded";
      state.errors = null;
      state.data = action.payload;
      state.allUsers = action.payload.allUsers;
    });
    builder.addCase(fetchRemove.rejected, (state, action) => {
      state.isLoading = "error";
      state.errors = action.error.message;
      // state.data = null;
      // state.message = action.payload.message;
    });
  },
});
export const selectIsAuth = (state) => Boolean(state.accountSlice.data);
export const accountReducer = accountSlice.reducer;
export const { logout } = accountSlice.actions;
