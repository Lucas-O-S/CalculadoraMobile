import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Touchable, TouchableOpacity } from 'react-native';



export default function App() {
  const [valor1,setValor1] = useState("");
  const [valor2,setValor2] = useState("");
  const [resultado,setResultado] = useState(0);
  const [operacao,setOperacao] = useState('+'); 
  const [visivel,setVisivel] = useState(false);

  const Calcular = () =>{
    num1 = parseFloat(valor1);
    num2 = parseFloat(valor2);
  }

  return (
    <View style={styles.container}>
      <Text>Primeiro Valor</Text>
      <TextInput 
        keyboardType='decimal-pad'
        onChangeText={setValor1}
      />
      
      <Text>Segundo Valor</Text>
      <TextInput 
        keyboardType='decimal-pad'
        onChangeText={setValor2}
      />

      <Text>Escolha Operação</Text>

      <TouchableOpacity
        onPress={() =>{
          setOperacao("+");
        }}
      >
        <Text>+</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>{
          setOperacao("-");
        }}
      >
        <Text>-</Text>
      </TouchableOpacity>
      
            
      <TouchableOpacity
        onPress={() =>{
          setOperacao("x");
        }}
      >
        <Text>X</Text>
      </TouchableOpacity>
      

      <TouchableOpacity
        onPress={() =>{
          setOperacao("/");
        }}
      >
        <Text>/</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() =>{
          setOperacao("^");
        }}
      >
        <Text>^</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>{
          let temp;
          if(isNaN(valor1) || valor1 === '' || isNaN(valor2) || valor2 === '') {
            alert("Preencha os valores corretamente");
            return;

          }
          else setVisivel(true);
          if(visivel){
            if(operacao === "+") temp = parseFloat(valor1) + parseFloat(valor2);
            else if (operacao === "-") temp = parseFloat(valor1) - parseFloat(valor2);
            else if (operacao === "x") temp = parseFloat(valor1) * parseFloat(valor2);
            else if (operacao === "/")  temp =parseFloat(valor1) / parseFloat(valor2);
            else if (operacao === "^") temp = Math.pow(parseFloat(valor1), parseFloat(valor2));
            setResultado(temp);
            if(isNaN(temp)) {
              alert("valores invalidos inválido");
              setVisivel(false);
            }
          }

        }}
      >
        <Text>Calcular</Text>
      </TouchableOpacity>


        {visivel && (
          <>
            < Text>Resultado</Text>
            <TextInput>{resultado}</TextInput>
          </>
        )
        }

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
