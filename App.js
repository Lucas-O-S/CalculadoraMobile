import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Touchable, TouchableOpacity, Button } from 'react-native';



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
      <Text
        style={styles.label}
      >Primeiro Valor</Text>
      <TextInput 
        keyboardType='decimal-pad'
        value={valor1}
        style={styles.input}
        placeholder='Digite um valor'
        onChangeText={setValor1}
      />
      
      <Text
        style={styles.label}
      >Segundo Valor</Text>
      
      <TextInput 
        keyboardType='decimal-pad'
        value={valor2}
        style={styles.input}
        placeholder='Digite um valor'
        onChangeText={setValor2}
    />
      <Text
        style={styles.label}
      >Escolha Operação</Text>
      <View {...styles.operacoes}>
          

        {["+", "-", "x", "/", "^"].map((op) => (
          <TouchableOpacity
            key={op}
            onPress={() => setOperacao(op)}
            style={[
              styles.button,
              operacao === op && styles.buttonSelecionado, 
            ]}
          >
            <Text style={styles.buttonText}>{op}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        onPress={() =>{
          Calcular();
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

       {visivel && (
          <>
            <Text
              style={styles.label}
            >Resultado</Text>
            <Text
              style={styles.label}
            >{resultado}</Text>
          </>
        )
        }

      <TouchableOpacity
        onPress={() => {Limpar();}}
        style={styles.button}
      >
        <Text 
          style={styles.buttonText}
        >Limpar</Text>
      </TouchableOpacity>


      <StatusBar style="auto" />


    </View>
  );
}

const cores = {
  primary: '#4A148C',       
  secondary: '#00BFA6',    
  background: '#FAFAFA',    
  inputBackground: '#EEEEEE',
  text: '#212121',
  buttonText: '#FFFFFF',
  error: '#D32F2F',
  shadow: 'rgb(95, 95, 95)',
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  label: {
    fontSize: 22,
    color: cores.text,
    marginBottom: 6,
    marginTop: 12,
    fontWeight: "500",
    textShadowColor: cores.shadow,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },

  input: {
    backgroundColor: cores.inputBackground,
    width: "60%",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    fontSize: 16,
    shadowColor: cores.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    textAlign: "center",
    color: cores.text,
  },

  button: {
    backgroundColor: cores.primary,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    margin: 5,
    minWidth: 60,
  },

  buttonText: {
    color: cores.buttonText,
    fontSize: 16,
    fontWeight: "bold",
  },

  operacoes: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 12,
  },

  buttonSelecionado: {
    backgroundColor: cores.secondary, 
    transform: [{ scale: 1.1 }],
  }
});



