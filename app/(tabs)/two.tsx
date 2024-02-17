import { StyleSheet } from 'react-native';
import { useSelector } from "react-redux"
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';


export default function TabTwoScreen(props) {
const data = useSelector(state => {
  console.log("soy state: ",state)
})
  
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generador de Prestamos</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
