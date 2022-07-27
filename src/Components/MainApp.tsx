import React from 'react';
import { MainAppWrapper } from '../Styles/MainAppStyles';

interface Props {
    component1: any;
}

export const MainApp = ({ component1 }: Props) => {
    return <MainAppWrapper>{component1}</MainAppWrapper>;
};
