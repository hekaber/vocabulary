import React, {useState} from "react";
import {LargeButtonContainer, FormContainer, FormLine, Form, ActionButton} from "../shared/styles";
import {IoCloseSharp} from "react-icons/io5";
import {ALLOWED_LANGUAGES} from "../../common/AppContext";

interface WordFormProps {
    show: boolean;
    onHide: Function;
}

interface TranslationInput {
    name: number;
}

export const WordForm = ({show, onHide}: WordFormProps) => {

    const initialTranslations: TranslationInput[] = [];
    const [translations, setTranslations] = useState(initialTranslations);

    const handleSubmit = () => {

    }

    const addTranslationInput = () => {
        const newInput = { name: translations.length + 1};
        setTranslations([...translations, newInput])
    }

    const handleClose = () => {
        setTranslations(initialTranslations);
        onHide();
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    }

    return (
        <FormContainer
            isHidden={!show}
        >
            <ActionButton
                onClick={() => handleClose()}
            >
                <IoCloseSharp />
            </ActionButton>
            <Form onSubmit={handleSubmit}>
                <h1>Nouveau mot</h1>
                <FormLine>
                    <span><label htmlFor="title">Title:</label></span>
                    <input type="text" id="title" name="name" value="" onChange={handleInputChange}/>
                </FormLine>

                {translations.map((translation, index) => {
                    return (
                        <FormLine key={index}>
                            <span><label htmlFor={"translat_" + index}>Contenu:</label></span>
                            <input type="text" id={"translat_" + index} name={translation.name.toString()} value="" onChange={handleInputChange}/>
                            <span><label htmlFor={"lang_" + index}>Langue:</label></span>
                            <select id={"lang_" + index}>
                                {ALLOWED_LANGUAGES.map((language, index) => {
                                    return (<option key={index} value={language}>{language}</option>)
                                })}
                            </select>
                        </FormLine>
                    )
                })}
                <LargeButtonContainer
                    onClick={addTranslationInput}
                >
                    + Ajouter traduction
                </LargeButtonContainer>

            </Form>
        </FormContainer>
    );
}
