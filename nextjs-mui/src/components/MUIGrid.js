"use client"

import { Grid,Box } from "@mui/material"

export default function MUIGrid(){
    return(
        <Grid container spacing={3}>
            <Grid size={{xs:12,sm:6}}>
                <Box sx={{bgcolor:"primary.main" ,p:2}}>Left</Box>
            </Grid>
            <Grid size={{xs:12,sm:6}}>
                <Box sx={{bgcolor:"secondary.main" ,p:2}}>Right</Box>
            </Grid>
        </Grid>
    )
}