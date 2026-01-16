import { Text } from 'react-native';

import { useRoute } from '@react-navigation/native';

export default function HomeScreen() {
  const { params } = useRoute();
  return <Text selectable>Params: {JSON.stringify(params)}</Text>;
}
