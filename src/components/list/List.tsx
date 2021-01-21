import { ListContainer } from "../shared/styles";
import {load} from "../../common/api";
import {ListItem} from "./ListItem";

export const List = () => {

    const words = load();

    return (
        <ListContainer>
            {words.map((word) => {
                const title = word.translations.FR ? word.translations.FR : "not available";
                return <ListItem
                    key={word.id}
                    title={title}
                />
            })}
        </ListContainer>
    );
}
