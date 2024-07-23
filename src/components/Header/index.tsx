import { ReactNode } from "react";
import { Container, 
    ButtonAddList, 
    AddList, 
    Title, 
    User, 
    TextContainer, 
 } from "./styles";

 type Props = {
    user: string;
    text: string;
    children?: ReactNode;
 }


export function Header({user, text, children}: Props){

    return(
        <Container>
            <TextContainer>
               <Title>{text}</Title>
                <User>{user}</User> 
            </TextContainer>

                {children}
            
            {/* <ButtonAddList>
               <AddList /> 
            </ButtonAddList> */}
            
        </Container>
    )
}