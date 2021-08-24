import * as React from 'react';
import { useState } from 'react';
import { userLogin, useNotify, Notification, defaultTheme } from 'react-admin';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';


const Login = ({ theme }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const notify = useNotify();
    const submit = e => {
        
        // will call authProvider.login({ email, password })
        console.log(email,password)
        userLogin({ email, password })
    };
    const container = {
        height: '100vh',
        display: 'flex',
        backgroundImage: "url("+"https://wallpaperaccess.com/full/1201158.png"+")",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };
    
    const formStyle = {
        flexDirection:'column',
        height:'200px',
        border: '1px solid #c9c9c9',
        borderRadius: '5px',
        background: 'transparent',
        width: '420px',
        justifyContent: 'center',
        alignItems: 'center',
    };
    const buttonStyle = {
        padding: '7px 10px',
        border: '1px solid #efffff',
        borderRadius: '5px',
        background: '#3085d6',
        width: '50%', 
        fontSize: '16px',
        color: 'white',
        textAlign:'center', 
        marginTop:'30px',
        marginLeft:'25%'
      
    
    };
    return (
        <div style={container} >
            <form style={formStyle}  onSubmit={submit}>
                <div>
        <label style={{marginLeft:20}}>email</label>
        <br></br>
                <input
                    style={{width:'60%',marginLeft:20}}
                    name="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                </div>
                <div>
        <label style={{marginLeft:20}}>password</label>
        <br></br>
                <input
                style={{width:'60%',marginLeft:20}}
                    name="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                </div>
                
                <input style={buttonStyle} type="submit" value="Log In"/> 
            </form>
            </div>
           
           
       
    );
};

export default Login;