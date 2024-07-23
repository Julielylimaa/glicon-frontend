import { Container, Search, SearchIcon } from "./styles";




export function SearchBox(){

    return(
        <Container>
            <Search placeholder="Filtrar por nome" placeholderTextColor="gray"/>
            <SearchIcon/>
        </Container>
    )
}