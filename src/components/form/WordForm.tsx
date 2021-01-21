import React, {useState} from "react";
import {LargeButtonContainer, FormContainer, ActionButton} from "../shared/styles";
import {IoCloseSharp} from "react-icons/io5";

interface WordFormProps {
    show: boolean;
    onHide: Function;
}

export const WordForm = ({show, onHide}: WordFormProps) => {


    const handleSubmit = () => {

    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    }
    console.log(show);
    return (
        <FormContainer
            isHidden={!show}
        >
            <ActionButton
                onClick={onHide()}
            >
                <IoCloseSharp />
            </ActionButton>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="name" value="" onChange={handleInputChange}/>
                </label>

                <label>
                    Title:
                    <input type="text" name="name" value="" onChange={handleInputChange}/>
                </label>
                <LargeButtonContainer>
                    + Nouvelle traduction
                </LargeButtonContainer>
            </form>
        </FormContainer>
    );
}