import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const slice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    setRating: (state, action) => {
      const { id, ratingValue } = action.payload;
      // Ensure state[id] exists, initialize it if it doesn't
      if (!state[id]) {
        state[id] = {};
      }
      // Set the rating
      state[id].rating = ratingValue;
      localStorage.setItem(`rating_${id}`, state[id].rating);
    },
    toggleBookmark: (state, action) => {
      const { id } = action.payload;
      // Ensure state[id] exists, initialize it if it doesn't
      if (!state[id]) {
        state[id] = {};
      }
      // Toggle isBookmarked
      state[id].isBookmarked = !state[id].isBookmarked || false;
      localStorage.setItem(`isBookmarked_${id}`, state[id].isBookmarked);
      if (state[id].isBookmarked) {
        // Save bookmarked data
        const { English, Khmer } = action.payload;
        state[id].bookmarked = { English, Khmer };
        localStorage.setItem(`bookmarked_${id}`, JSON.stringify(state[id].bookmarked));
      } else {
        // Remove bookmarked data
        localStorage.removeItem(`bookmarked_${id}`);
      }
    }
  },
});


export const { toggleBookmark, setRating } = slice.actions;
export default slice.reducer;
