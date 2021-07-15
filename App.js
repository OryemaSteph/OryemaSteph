import React,{useState} from 'react';
import { StyleSheet, 
  Text, 
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styled from "styled-components";
import { MaterialIcons, Entypo } from "@expo/vector-icons";



export default function App() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]); 

const name='Stephen';
const submitHandler = (value) => {
  setData((prevTodo) => {
    return [
      {
        value: value,
        key: Math.random().toString(),
      },
      ...prevTodo,
    ];
  });
}

const onChangeText = (text) => {
  setValue(text);
};

const deleteItem = (key) => {
  setData((prevTodo) => {
    return prevTodo.filter((todo) => todo.key != key);
  });
};

let today = new Date().toISOString().slice(0, 10);
  return (
    <View style={styles.container}>
      
      <FlatList 
      ListHeaderComponent={() => (
       <View>
        <Text style={styles.heading}>{name} To Do List</Text>
        <HeaderList>{today}</HeaderList>
       </View>
      )}
      data={data}
      keyExtractor={(item)=>item.key}
      renderItem={({item})=>(
        data.length>0?  <TouchableOpacity 
          style={{flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'#007192',
          borderBottomColor:'#007192',
          borderBottomWidth:1,
          borderRadius:5,
          marginLeft:5,
          marginBottom:5,
          marginRight:5}}
          onPress={() => alert('Clicked')}
          >          
          <TouchableOpacity style={{marginLeft:10}} >
            <Entypo name="circle" size={20} color="midnightblue" />
          </TouchableOpacity>
              <View style={styles.todos}>
              <Text style={{justifyContent:'center',marginBottom:20}}>{item.value}</Text>            
              </View>      
              <TouchableOpacity style={{marginRight:10}} onPress={() => deleteItem(item.key)}>
              <MaterialIcons name="delete" size={24} color="#ffffff" />
              </TouchableOpacity>    
          </TouchableOpacity>:<Text>No To Dos</Text>
         
       )}
      />

      <ComponentContainer >
      <InputContainer>
        <View>
        <Input placeholder="Add Task..." onChangeText={onChangeText}  /> 
        </View>
      </InputContainer>
      <SubmitButton
       onPress={() => {submitHandler(value);
        }}
      >
        <Text >Submit</Text>
      </SubmitButton>
    </ComponentContainer>
     
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const ComponentContainer = styled.View`
  flex-direction: row;
`;

const InputContainer = styled.View`
  flex-direction: row;
  border-radius: 10px;
`;

const Input = styled.TextInput`
  font-size: 20px;
  background-color: white;
  width: 250px;
  margin-right: 20px;
  padding: 10px;
  margin-bottom: 20px;
  margin-left: 10px;
  border-radius: 10px;
`;
const CirlceContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: 5px;
`;

const SubmitButton = styled.TouchableOpacity`
  width: 70px;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  margin-bottom: 20px;
  margin-right: 20px;
  border-radius: 50px;
`;

const HeaderList = styled.Text`
  color: white;
  text-align:center;
  font-size: 20px;
  margin-bottom: 20px;
  margin-top: 5px;
`;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009367',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop:60,
  },
  heading:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    color:'#fff',
    margin:20,
  },
  todos:{
    flex:1,
    alignItems:'flex-start',
    marginTop:20,
    marginLeft:20,
  },
  input:{
    backgroundColor:'grey',
    width:200,
    height:50,
    marginRight:10,
    borderRadius:10,
    paddingLeft:10,
  },
  addbtn:{
    backgroundColor:'#009367',
    width:100,
    height:40,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  }
});
