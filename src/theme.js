import { Platform } from "react-native";

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      textAppBar: 'white',
      primary: '#0366d6',
      appBar: '#24292e',
    },
    fontSizes: {
      body: 14,
      subheading: 16,
      heading: 20,
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
    bubble: {
      backgroundColor: '#0366d6', //primary
      color: 'white',
      padding: 5,
      borderRadius: 5,
    }
  };
  
export default theme;