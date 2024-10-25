import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheetComponent from './BottomSheet';

const AppTrial = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <BottomSheetComponent />
  </GestureHandlerRootView>
);

export default AppTrial
