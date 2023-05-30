import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // import useNavigate from react-router-dom
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Navbar from "../Navbar"

const Login = () => {

    const [email, setEmail] = useState('');


    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // useNavigate hook

    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const btnstyle = { margin: '8px 0' };

    const handleSignIn = async () => {
        const response = await fetch('http://localhost:8000/patients/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ email, password })

        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.jwtToken);
            localStorage.setItem('user', JSON.stringify(data));
            // Redirect to the dashboard/home page after successful login
            navigate("/"); // Replace "/dashboard" with your actual route
        } else {
            // Handle login error
            const errorData = await response.json();
            console.error("Login error: ", errorData.detail);
        }
    }

    return (
        
        <Grid>
            <Navbar />
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Log In</h2>
                </Grid>

                <TextField label='Email' placeholder='Email' fullWidth required
                    value={email} onChange={(e) => setEmail(e.target.value)} />

                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={handleSignIn}>
                    Log in
                </Button>

                <Typography>
                    Do you have an account ?
                    <Link href="../Register">
                        Register
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    );
}

export default Login;