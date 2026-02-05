import React, {useCallback, useMemo} from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {styles} from './style';
import {UserProfile} from '../../utils/Type';
import {APP_CONSTANTS} from '../../constants';
import {SIZE} from '../../theme/Font';
import {Settings} from '../../assets/svg';
import {HeaderBgImage} from '../../assets/image';
import {
  CustomLinearGradient,
  DataFieldCard,
  ListFooter,
} from '../../components';
import {GRADIENT_COLORS} from '../../utils';
import useProfileScreen from '../../hooks/useUser';
import {SafeAreaView} from 'react-native-safe-area-context';

const ProfileScreen = () => {
  const {
    userRecord,
    loginUserDetails,
    loading,
    handleMoreData,
    handleMomentumScrollBegin,
    handleLogout,
  } = useProfileScreen();

  const listFooter = useMemo(() => <ListFooter loading={loading} />, [loading]);

  const renderUser = useCallback(({item}: {item: UserProfile}) => {
    return <DataFieldCard renderData={item} />;
  }, []);
  return (
    <SafeAreaView style={styles.mainContainer} edges={['left', 'right']}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Image style={styles.headerImage} source={HeaderBgImage} />
      <View style={styles.headerContainer}>
        <CustomLinearGradient
          colors={GRADIENT_COLORS}
          image={loginUserDetails.image}
        />
        <TouchableOpacity onPress={handleLogout}>
          <Settings width={SIZE.f24} height={SIZE.f24} />
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.recentlyAddedText}>
          {APP_CONSTANTS.RECENTLY_ADDED}
        </Text>
        <FlatList
          data={userRecord}
          renderItem={renderUser}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: UserProfile) => item.id.toString()}
          ListFooterComponent={listFooter}
          onEndReachedThreshold={0.2}
          onEndReached={handleMoreData}
          contentContainerStyle={styles.contentContainer}
          onMomentumScrollBegin={handleMomentumScrollBegin}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(ProfileScreen);
