import React from 'react'
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';



const Screen1 = () => {
    return <>
        <Paper elevation={3} style={{ maxWidth: '80%', marginLeft: 'auto', marginRight: 'auto', paddingBottom: '1rem' }}>
            <Box
                sx={{
                    width: '80%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    padding: '1rem',
                }}
            >

                <TextField
                    fullWidth
                    id="filled-multiline-static"
                    // label="Multiline"
                    placeholder="Paste your json here..."
                    multiline
                    rows={14}
                    variant="filled"
                    style={{ display: 'block', minWidth: '5rem', }}
                />
            </Box>


            <Button variant="outlined" style={{ marginTop: '1rem', marginLeft: 'auto', marginRight: 'auto', display: 'block', width: '80%', marginBottom: '1rem' }}> Create Form</Button>
        </Paper>

    </>
}

export default Screen1