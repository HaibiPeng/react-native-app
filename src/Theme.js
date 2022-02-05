import { Platform } from 'react-native';

const theme = {
  colors: {
    primary: '#0366d6',
    textSecondary: '#586069',
    textWhite: 'white',
    tabTextColor: 'white',
    tabBackgroundColor: '#24292e',
    RepositoryItemBackgroundColor: 'white',
    mainBackgroundColor: '#e1e4e8',
    errorTextColor: '#d73a4a',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    tab: 18,
  },
  fonts: {
    main: Platform.select({
			android: 'Roboto',
			ios: 'Arial',
			default: 'System'
		}),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;