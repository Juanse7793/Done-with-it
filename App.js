import { View } from 'react-native';
import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';

export default function App() {
  console.log(useDimensions(), useDeviceOrientation());
  const { landscape } = useDeviceOrientation();
  return <WelcomeScreen />;
}
