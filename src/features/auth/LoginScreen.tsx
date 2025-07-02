import {
  View,
  Text,
  StatusBar,
  Platform,
  Image,
  Animated,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, { FC, useEffect, useRef, useState } from 'react';
import { loginStyles } from '@unistyles/authStyles';
import { useStyles } from 'react-native-unistyles';
import CustomText from '@components/global/CustomText';
import BreakerText from '@components/ui/BreakerText';
import PhoneInput from '@components/ui/PhoneInput';
import { resetAndNavigate } from '@utils/NavigationUtils';
import SocialLogin from '@components/ui/SocialLogin';
import useKeyboardOffsetHeight from '@utils/useKeyboardOffsetHeight';

const LoginScreen: FC = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const keyboardOffsetHeight = useKeyboardOffsetHeight();
  console.log(keyboardOffsetHeight);

  const { styles } = useStyles(loginStyles);
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      resetAndNavigate('UserBottomTab');
    }, 2000);
  };

  useEffect(() => {
    if (keyboardOffsetHeight == 0) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animatedValue, {
        toValue: -keyboardOffsetHeight * 0.2,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [keyboardOffsetHeight]);
  return (
    <View style={styles.container}>
      <StatusBar hidden={Platform.OS !== 'android'} />
      <Image
        source={require('@assets/images/login.png')}
        style={styles.cover}
      />
      <Animated.ScrollView
        bounces={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        contentContainerStyle={styles.bottomContainer}
        style={{ transform: [{ translateY: animatedValue }] }}
      >
        <CustomText fontFamily="Okra-Bold" variant="h2" style={styles.title}>
          Nepal #1 Food Delivery and Dining App
        </CustomText>
        <BreakerText text="Login or Sign up" />

        <PhoneInput
          onBlur={() => {}}
          onFocus={() => {}}
          value={phone}
          onChangeText={setPhone}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          disabled={loading}
          activeOpacity={0.9}
          onPress={handleLogin}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <CustomText color="white" fontFamily="Okra-Medium" variant="h5">
              Continue
            </CustomText>
          )}
        </TouchableOpacity>
        <BreakerText text="OR" />
        <SocialLogin />
      </Animated.ScrollView>

      <View style={styles.footer}>
        <CustomText>By continuing, you agree to our</CustomText>
        <View style={styles.footerTextContainer}>
          <CustomText style={styles.footerText}>Terms of Services</CustomText>
          <CustomText style={styles.footerText}>Privacy Policy</CustomText>
          <CustomText style={styles.footerText}>Content Policies</CustomText>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
