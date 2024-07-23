import {  Container, InputBox } from "./styles";


export function UserInputs(){
    return(
    
        <Container>    
            <InputBox placeholder="Alvo" placeholderTextColor="gray" keyboardType="numeric"></InputBox>
            <InputBox placeholder="CHO/uni" placeholderTextColor="gray" keyboardType="numeric"></InputBox>
            <InputBox placeholder="Glicemia" placeholderTextColor="gray" keyboardType="numeric"></InputBox>
            
        </Container>
        
    )

}