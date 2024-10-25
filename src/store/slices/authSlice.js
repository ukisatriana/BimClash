import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AUTH_TOKEN } from 'constants/AuthConstant';
import AuthService from 'services/AuthService';

export const initialState = {
  loading: false,
  message: '',
  showMessage: false,
  redirect: '',
  token: localStorage.getItem(AUTH_TOKEN) || null
};

export const signIn = createAsyncThunk('auth/login', async (data, { rejectWithValue }) => {
  try {
    const user = await AuthService.login(data);
    const token = await user.getIdToken();
    localStorage.setItem(AUTH_TOKEN, token);
    return token;
  } catch (err) {
    return rejectWithValue(err.message || 'Error');
  }
});

export const signOut = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
	try {
		await AuthService.logout();
		localStorage.removeItem(AUTH_TOKEN);
		return true;
	} catch (err) {
		return rejectWithValue(err.message || 'Error');
	}
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticated: (state, action) => {
      state.loading = false;
      state.redirect = '/';
      state.token = action.payload;
    },
    showAuthMessage: (state, action) => {
      state.message = action.payload;
      state.showMessage = true;
      state.loading = false;
    },

    hideAuthMessage: (state) => {
      state.message = '';
      state.showMessage = false;
    },
    signOutSuccess: (state) => {
      state.loading = false;
      state.token = null;
      state.redirect = '/';
    },
    showLoading: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.loading = false;
      state.token = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.redirect = '/';
        state.token = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.showMessage = true;
      })


	  .addCase(signOut.fulfilled, (state) => {
		state.loading = false
		state.token = null
		state.redirect = '/'
		})
		.addCase(signOut.rejected, (state) => {
			state.loading = false
			state.token = null
			state.redirect = '/'
		})
	  
	  ;
  }
});

export const { authenticated, showAuthMessage, hideAuthMessage, signOutSuccess, showLoading, signInSuccess } = authSlice.actions;

export default authSlice.reducer;