import styled from 'styled-components'

export const FooterContainer = styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    background-color: #304251;
    height: 80px;

    .back-to-top-desktop{
        display:flex;
        position: relative;
        width:82px;
        right:15vw;
        bottom: 41px;

    }
    .back-to-top-mobile{
        display:none;
        width: 54px;
    }

    @media (max-width: 800px){

        .back-to-top-desktop{
        display:none
    }
    .back-to-top-mobile{
        display:flex;
        position: relative;
        right:5vw;
        bottom: 41px;

    }
    }

`