import {ListItemContainer} from "../shared/styles";

interface ListItemProps {
    title: string
}

export const ListItem = (props: ListItemProps) => {

    return(
        <ListItemContainer>
            <h1>{props.title}</h1>
            <div>Test</div>
        </ListItemContainer>
    );
}
