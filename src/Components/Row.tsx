import React from 'react';

import { RowWrapper } from '../Styles/RowStyles';

interface Props {
    component1: any;
    component2?: any;
}

export const Row = ({ component1, component2 }: Props) => {
    return (
        <RowWrapper>
            {component1}
            {component2}
        </RowWrapper>
    );
};
