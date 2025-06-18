'use client';

import React from "react";
import style from 'styled-components';

const HomeScreen = () => {
    return(
        <div>
            <Title>Welcome</Title>
            <p>This is home page.</p>
        </div>
    )
}

const Title = style.h1`
    color: #f00;
    background-color: #000;
    @:hover {
        color: #f0f;
    }
`;

export default HomeScreen;