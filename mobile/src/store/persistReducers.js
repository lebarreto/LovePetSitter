import { AsyncStorage } from 'react-native';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'lovepetsitter',
      storage: AsyncStorage,
      whitelist: ['auth', 'pets'],
    },
    reducers
  );

  return persistedReducer;
};