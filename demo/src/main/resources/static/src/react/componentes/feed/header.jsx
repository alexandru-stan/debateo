import React from "react";
import theme from "../../../assets/material-ui-themes/DefaultTheme";
import { Stack } from "@mui/material";

const Header = () => {
    return (
        <Stack sx={{backgroundColor:theme.palette.primary.main}} id="estac">
            <h1>Hola</h1>
            <h1>Adios</h1>
        </Stack>
    );
}

export default Header;