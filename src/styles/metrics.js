import { Platform } from 'react-native';

export default {
  H_PADDING: 12,
  V_PADDING: 12,
  ...Platform.select({
    ios: { headerHeight: 64, headerPadding: 20 },
    android: { headerHeight: 44, headerPadding: 0 },
  }),
};
