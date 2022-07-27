import React from 'react';
import { BoxWrapper } from '../Styles/BoxStyles';

interface Props {
    component1: any;
    component2?: any;
}

export const Box = ({ component1, component2 }: Props) => {
    return (
        <BoxWrapper>
            {component1}
            {component2}
        </BoxWrapper>
    );
};
