import {ListItemContainer} from "../shared/styles";

interface ListItemProps {
    title: string
}

export const ListItem = (props: ListItemProps) => {

    return(
        <ListItemContainer>
            <h4>{props.title}</h4>
            <div>Test</div>
        </ListItemContainer>
    );
}
