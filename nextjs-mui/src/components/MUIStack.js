"use client"

import {Stack,Button} from "@mui/material"

export default function MUIStack(){
    return(
        <Stack direction="row" spacing={2}>
            <Button variant="contained" sx={{backgroundColor:"red"}}>One</Button>
            <Button variant="contained" sx={{backgroundColor:"green"}}>Two</Button>
        </Stack>
    )
}