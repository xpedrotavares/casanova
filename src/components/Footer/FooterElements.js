import styled from 'styled-components'

export const FooterContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content:flex-end;
    align-items:center;
    background-color: #304251;
    height: 80px;
    .info-dev{
        display:flex;
        align-items: start;
        height:30%;
        
    }
    .info-dev p {
     
    }
p{
    margin-right:auto;
    margin-left:auto;
    justify-self:center;
    margin-bottom:0;
    color:white;
    font-family: 'Roboto';
font-size: 13px;
font-style: normal;
font-weight: 300;
letter-spacing: -0.015em;
text-align:center;
/* width: 42vw; */
}
div{
    display:flex;
    align-items: flex-end;
    height:65%;
    width:100%;
} 
.certificate-text{
    width:fit-content;
    font-size: 15px;
    font-weight:500;
    margin:0 0 -10px 5px;
    

}
.certificate-container{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
}

.logo-casanova-container{
    display:flex;
    flex-direction: column;
   align-items:center;
    justify-content:center;
    align-items:center;
}
.certificate-icon{
    width: 50px;
    margin-right:5px
}
.logo-casanova{
    display:none;
    width:150px;
    /* margin-right:auto;
    margin-left:auto; */
    margin-bottom:10px
}
    .back-to-top-desktop{
        display:initial;
        width:82px;
    }
    .back-to-top-container{
            position: relative;
            bottom:110px;
            margin-right: 13vw;
        }
    .back-to-top-mobile{
        display:none;
        width: 54px;
        cursor: pointer;
    }
 
    @media (max-width: 800px){
        display:flex;
        align-items:center;
        div{
            height:70%;
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
    margin-top:10px;
    width:100px;
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

    .certificate-text{
    width:fit-content;
    font-size: 12px;
    font-weight:500;
    margin:0 0 5px 5px;

}
    }

`