import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';

const Screen1 = () => {

    const [data, setData] = useState('');

    const handleChange = (event) => {
        setData(event.target.value);
    }

    const handleClick = (event) => {
        // convert into json
        const json = JSON.parse(data);

        console.log(json);
        if (json) {
            localStorage.setItem('data', JSON.stringify(json));
            console.log('data saved', json);
            alert('Success');
            // empty the text field
            setData('');
        }
    }

    return <>
        <Paper elevation={3} style={{ maxWidth: '80%', marginLeft: 'auto', marginRight: 'auto', paddingBottom: '1rem' }}>
            <Box sx={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', padding: '1rem', }} >
                <TextField
                    fullWidth
                    placeholder="Paste your json here..."
                    multiline
                    rows={14}
                    variant="filled"
                    style={{ display: 'block', minWidth: '5rem', }}
                    onChange={handleChange}
                    value={data}
                />
            </Box>

            <Button variant="outlined" style={{ marginTop: '1rem', marginLeft: 'auto', marginRight: 'auto', display: 'block', width: '80%', marginBottom: '1rem' }} onClick={handleClick} > Create Form</Button>
        </Paper>

    </>
}

export default Screen1