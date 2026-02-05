import {useCallback, useEffect, useRef, useState} from 'react';
import {Alert} from 'react-native';
import {RootState} from '../store/Store';
import {
  fetchCurrentUserProfile,
  getAllUserRecord,
} from '../store/user/UserThunks';
import {APP_CONSTANTS} from '../constants';
import {setLogout} from '../store/user/Reducer';
import {useAppDispatch, useAppSelector} from '../store/Store';

const PAGE_SIZE = 20;
const useProfileScreen = () => {
  const {userRecord, userLoginToken, loading, hasMoreData, loginUserDetails} =
    useAppSelector((state: RootState) => state.userList);

  const dispatch = useAppDispatch();

  const [page, setPage] = useState(0);
  const onEndReachedCalledDuringMomentum = useRef(true);

  const fetchUsers = useCallback(() => {
    if (loading) {
      return;
    }

    dispatch(
      getAllUserRecord({
        pageSize: PAGE_SIZE,
        offset: page * PAGE_SIZE,
      }),
    );
  }, [page]);

  useEffect(() => {
    if (userLoginToken) {
      dispatch(fetchCurrentUserProfile());
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleMoreData = useCallback(() => {
    if (!onEndReachedCalledDuringMomentum.current && !loading && !hasMoreData) {
      onEndReachedCalledDuringMomentum.current = true;
      setPage(prev => prev + 1);
    }
  }, [loading, hasMoreData]);

  const handleMomentumScrollBegin = useCallback(() => {
    onEndReachedCalledDuringMomentum.current = false;
  }, []);

  const handleLogout = useCallback(() => {
    Alert.alert(APP_CONSTANTS.LOGOUT, APP_CONSTANTS.LOGOUT_MESSAGE, [
      {
        text: APP_CONSTANTS.CANCEL,
        style: 'cancel',
      },
      {
        text: APP_CONSTANTS.LOGOUT,
        style: 'destructive',
        onPress: () => dispatch(setLogout()),
      },
    ]);
  }, []);

  return {
    userRecord,
    loginUserDetails,
    loading,
    handleMoreData,
    handleMomentumScrollBegin,
    handleLogout,
  };
};

export default useProfileScreen;
