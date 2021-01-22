import React, {useState} from "react";
import {LargeButtonContainer, FormContainer, FormLine, ActionButton} from "../shared/styles";
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
            <form onSubmit={handleSubmit}>
                <FormLine>
                    <label>
                        Title:
                        <input type="text" name="name" value="" onChange={handleInputChange}/>
                    </label>
                </FormLine>

                {translations.map((translation, index) => {
                    return (
                        <FormLine key={index}>
                            <label>
                                Contenu:
                                <input type="text" name={translation.name.toString()} value="" onChange={handleInputChange}/>
                            </label>
                            <label>
                                Langue:
                                <select>
                                    {ALLOWED_LANGUAGES.map((language, index) => {
                                        return (<option key={index} value={language}>{language}</option>)
                                    })}
                                </select>
                            </label>
                        </FormLine>
                    )
                })}
                <LargeButtonContainer
                    onClick={addTranslationInput}
                >
                    + Ajouter traduction
                </LargeButtonContainer>
            </form>
        </FormContainer>
    );
}