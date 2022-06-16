import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Screen2 = () => {
    // get the json from local storage
    const data = localStorage.getItem('data');
    const json = JSON.parse(data);
    // console.log(data[0]);
    // convert into json



    // const json = JSON.parse(data);
    // console.log('s', json);

    return <>
        {/* making a form from data */}
        {/* {data.map((item, index) => { */}
        {data}
        {/* })} */}


    </>
}

export default Screen2