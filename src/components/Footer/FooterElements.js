import styled from 'styled-components'

export const FooterContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content:flex-end;
    align-items:flex-end;
    background-color: #304251;
    height: 82px;
p{
    margin-right:auto;
    margin-left:auto;
    justify-self:center;
    margin-bottom:0;
    color:white;


    font-family: 'Roboto';
font-size: 15px;
font-style: normal;
font-weight: 300;
letter-spacing: -0.015em;
text-align:center;

width: 42vw;
    
}
div{
    display:flex;
    align-items: center;
    height:100%;
    width:100%;
} 

.logo-casanova-container{
    display:none;
}
.logo-casanova{
    display:none;
    width:150px;
    margin-right:auto;
    margin-left:auto;
    margin-bottom:10px
}
    .back-to-top-desktop{
        display:initial;
        width:82px;
        /* position:fixed;
        right:13vw;
        bottom:42px;
        cursor: pointer; */

    }
    .back-to-top-container{
            position: relative;
            bottom:130px;
            margin-right: 13vw;
        }
    .back-to-top-mobile{
        display:none;
        width: 54px;
        cursor: pointer;
    }

    @media (max-width: 800px){
        div{
            height:50%;
        }
        .back-to-top-container{
            position: relative;
            bottom:175px;
            margin-right: 5vw;
        }

        height: 150px;
        .logo-casanova-container{
            display:inherit;
        }
        .logo-casanova{
    display:inherit;
    /* margin-top: 30px; */
        }
        p{
            font-size:12px;
            width: 300px;

        }
        .back-to-top-desktop{
        display:none
    }
    .back-to-top-mobile{
        display:inherit;
       

    }
    }

`