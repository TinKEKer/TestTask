import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {useDispatch, useSelector} from "react-redux";
import {LogIn} from "../Utils/redux/actions";
import { TextInput,Button } from 'react-native-paper';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from "../Utils/deviceDimensions";
import {checkInput} from "../Utils/helpers/checkInput";
import {updateInput} from "../Utils/helpers/updateInput";
import {handleSubmit} from "../Utils/helpers/handleSubmit";

export const Login = ()=>{
    const [form, setForm] = React.useState({email:'',password:''});
    const [error,setError] = React.useState(false);

   const isDisabled = checkInput(form.email)||checkInput(form.password)
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state=>state.MainReducer.isLoggedIn)

    const logIn=()=>{
        if(!isLoggedIn&&!isDisabled){
            dispatch(LogIn(form))
        }
    }


    return(
        <View style={styles.container}>
            <View style={styles.inputsContainer}>
            <TextInput
                label="Email"
                mode={'outlined'}
                value={form.email}
                onChangeText={text=>updateInput(text,setForm,'email')}
            />
            <TextInput
                secureTextEntry={true}
                label="Password"
                mode={'outlined'}
                value={form.password}
                onChangeText={text => updateInput(text,setForm,'password')}
                style={{marginVertical:10}}
            />
                {error&&<Text style={styles.errorText}>Имя пользователя или пароль введены не верно</Text>}
            <Button mode={'contained'} style={styles.logInButton} disabled={isDisabled} onPress={()=>{
                handleSubmit(form,setError,logIn)
            }} >
                login
            </Button>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:DEVICE_HEIGHT*0.05
    },
    inputsContainer:{
        width:DEVICE_WIDTH*0.9
    },
    errorText:{
        color:'red',
        textAlign:'center'
    },
    logInButton:{
        marginTop:20
    }
})
