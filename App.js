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
    let num1 = parseFloat(valor1.replace(",","."));
    let num2 = parseFloat(valor2.replace(",","."));
    if(isNaN(num1) || isNaN(num2) ){
      alert("Preencha os valores corretamente");
      return;
    }
    else{
      let temp;
      if(operacao === "+") temp = num1 + num2;
      else if (operacao === "-") temp = num1 -num2;
      else if (operacao === "x") temp = num1 *num2;
      else if (operacao === "/")  temp =num1 /num2;
      else if (operacao === "^") temp = Math.pow(num1,num2);
      if(isNaN(temp)) {
        alert("Operação inválida");
        return;
      }
      else{
        setResultado(temp);
        setVisivel(true);
      }

    }
  }

  function Limpar(){
    setValor1("");
    setValor2("");
    setVisivel(false);
    setOperacao("+");
    setResultado(0);
  }

  return (
    <View style={styles.container}>
      <Text>Primeiro Valor</Text>
      <TextInput 
        keyboardType='decimal-pad'
        value={valor1}
        onChangeText={setValor1}
      />
      
      <Text>Segundo Valor</Text>
      <TextInput 
        keyboardType='decimal-pad'
        value={valor2}

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
          Calcular();
        }}
      >
        <Text>Calcular</Text>
      </TouchableOpacity>

       {visivel && (
          <>
            <Text>Resultado</Text>
            <Text>{resultado}</Text>
          </>
        )
        }

      <TouchableOpacity
        onPress={() => {Limpar();}}
      >
        <Text>Limpar</Text>
      </TouchableOpacity>


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
