import React from 'react';
import { InputWrapper } from './Styles/InputStyles';
import { LabelWrapper } from './Styles/LabelStyles';
import { Box } from './Components/Box';
import { ButtonWrapper } from './Styles/ButtonStyles';
import { TextAreaWrapper } from './Styles/TextAreaStyles';
import { Row } from './Components/Row';
import { MainApp } from './Components/MainApp';

export const App = () => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata);
        console.log(data);
    };

    return (
        <MainApp
            component1={
                <form onSubmit={handleSubmit}>
                    <Row
                        component1={
                            <Box
                                component1={<LabelWrapper>Name</LabelWrapper>}
                                component2={<InputWrapper name="Name" type={'text'} required></InputWrapper>}
                            ></Box>
                        }
                        component2={
                            <Box
                                component1={<LabelWrapper>Last Name</LabelWrapper>}
                                component2={<InputWrapper name="LastName" type={'text'} required></InputWrapper>}
                            ></Box>
                        }
                    ></Row>
                    <Row
                        component1={
                            <Box
                                component1={<LabelWrapper>Email</LabelWrapper>}
                                component2={<InputWrapper name="Email" type={'email'} required></InputWrapper>}
                            ></Box>
                        }
                        component2={
                            <Box
                                component1={<LabelWrapper>Phone</LabelWrapper>}
                                component2={<InputWrapper name="Phone" type={'tel'} required></InputWrapper>}
                            ></Box>
                        }
                    ></Row>

                    <Row
                        component1={
                            <Box
                                component1={<LabelWrapper>Message</LabelWrapper>}
                                component2={<TextAreaWrapper name="Message" required></TextAreaWrapper>}
                            ></Box>
                        }
                    ></Row>
                    <Row
                        component1={<Box component1={<ButtonWrapper type="submit">Submit</ButtonWrapper>}></Box>}
                    ></Row>
                </form>
            }
        ></MainApp>
    );
};

export default App;
