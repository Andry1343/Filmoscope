import styled from "@emotion/styled";

export const List = styled.ul`
    text-decoration: none;
    display: grid;
    
    grid-template-rows: auto;
    grid-gap: 15px;
    margin: 30px auto;

    @media only screen and (min-width: 320px) {
        /* For everything bigger than 320px */
        grid-template-columns: repeat(1, 1fr);

        }
            @media only screen and (min-width: 481px) {
                /* For everything bigger than 481px */
                grid-template-columns: repeat(2, 1fr);
                }
                @media only screen and (min-width: 769px) {
                    /* For everything bigger than 769px */
                    grid-template-columns: repeat(3, 1fr);
                    }   
                    @media only screen and (min-width: 1025px) {
                        /* For everything bigger than 1025px */
                        grid-template-columns: repeat(4, 1fr);
                        }     
                        @media only screen and (min-width: 1201px) {
                            /* For everything bigger than 1201px */
                            grid-template-columns: repeat(5, 1fr);
                            grid-gap: 30px;
                            }                    
`
//grid-template-rows: repeat(4, 1fr);
//grid-template-columns: repeat(5, 1fr);

