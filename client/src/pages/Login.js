import React, { useState } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }

    const handleSignIn = async () => {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            // handle successful login
        } else {
            // handle login error
        }
    }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Log In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required
                    value={username} onChange={(e) => setUsername(e.target.value)} />
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
                    <Link href="../pages/Register">
                        Register
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login
