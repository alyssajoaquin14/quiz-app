import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuizState {
  weight: string;
  birthday: string;
  email: string;
}

const initialState: QuizState = {
  weight: '',
  birthday: '',
  email: '',
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setWeight(state, action: PayloadAction<string>) {
      state.weight = action.payload;
    },
    setBirthday(state, action: PayloadAction<string>) {
      state.birthday = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
  },
});

export const { setWeight, setBirthday, setEmail } = quizSlice.actions;
export default quizSlice.reducer;