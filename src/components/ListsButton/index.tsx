import { Container, TextButton, SubmitButton } from "./styles";

type Props = {
    text: string,
    onPress: ()=> void,
    
}

export function ListsButton({text, onPress}: Props){
    return(

        <Container >
            <SubmitButton onPress={onPress}><TextButton>{text}</TextButton></SubmitButton>
        </Container>
    )
}