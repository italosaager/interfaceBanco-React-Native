import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
    {id: 1, label: 'Conta de luz', value: '150,00', date: '19/06/2022', type: 0}, //type 0 é saída e 1 entrada
    {id: 2, label: 'Conta de água', value: '100,00', date: '10/06/2022', type: 0},
    {id: 3, label: 'Condominio', value: '140,00', date: '07/06/2022', type: 0},
    {id: 4, label: 'Pix Recebido', value: '50,00', date: '19/05/2022', type: 1},
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name = "Italo Saager"/>
        <Balance saldo = "15.000,00" gastos = "-390,00"/>
        <Actions/>
        <Text style={styles.title}>Últimas movimentações</Text>
        <FlatList 
        style={styles.list} 
        data={list} 
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({item}) => <Movements data={item}/> }/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f4f4f',
  },
  texto:{
    color: 'azure',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
    color: 'azure',
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});