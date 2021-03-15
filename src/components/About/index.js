import React from 'react'

import { AboutContainer, MainTitle, MainSubtitle, MainParagraph, ServicesContainer, ServiceSection, ServicesTitle, ServiceParagraph } from './AboutElements'

const About = () => {
    return (
        <>
            <AboutContainer>

                <MainTitle>About us</MainTitle>
                <MainSubtitle>Lorem ipsum dolor Lorem ipsum dolor Lorem</MainSubtitle>
                <MainParagraph>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.<br /><br />
Nemo enim ipsam Nemo enim ipsam voluptatem quia sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </MainParagraph>
                <ServicesContainer>
                    <ServiceSection>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40 16.129V5.80642C40.0001 5.68945 39.9684 5.57465 39.9083 5.4743C39.8482 5.37395 39.7619 5.29184 39.6587 5.23674L29.9813 0.0754449C29.8877 0.0259004 29.7833 0 29.6774 0C29.5715 0 29.4672 0.0259004 29.3735 0.0754449L19.6961 5.23674C19.5929 5.29184 19.5067 5.37395 19.4466 5.4743C19.3864 5.57465 19.3547 5.68945 19.3548 5.80642V11.1395C19.3548 11.7435 18.7112 12.1296 18.1783 11.8454L10.6265 7.8174C10.5328 7.76785 10.4285 7.74195 10.3226 7.74195C10.2167 7.74195 10.1123 7.76785 10.0187 7.8174L0.341291 12.9787C0.238103 13.0338 0.151835 13.1159 0.0917189 13.2163C0.0316024 13.3166 -0.000101127 13.4314 2.4233e-07 13.5484V34.1936C-0.000101127 34.3106 0.0316024 34.4254 0.0917189 34.5257C0.151835 34.626 0.238103 34.7082 0.341291 34.7633L10.0187 39.9246C10.1123 39.9741 10.2167 40 10.3226 40C10.4285 40 10.5328 39.9741 10.6265 39.9246L19.6235 35.126C19.8588 35.0005 20.1412 35.0005 20.3765 35.126L29.3735 39.9246C29.4672 39.9741 29.5715 40 29.6774 40C29.7833 40 29.8877 39.9741 29.9813 39.9246L39.6587 34.7633C39.7619 34.7082 39.8482 34.626 39.9083 34.5257C39.9684 34.4254 40.0001 34.3106 40 34.1936V23.871C40.0001 23.754 39.9684 23.6392 39.9083 23.5389C39.8482 23.4385 39.7619 23.3564 39.6587 23.3013L34.792 20.7059C34.2273 20.4047 34.2273 19.5953 34.792 19.2941L39.6587 16.6987C39.7619 16.6436 39.8482 16.5615 39.9083 16.4611C39.9684 16.3608 40.0001 16.246 40 16.129ZM29.301 1.57749C29.5363 1.45202 29.8186 1.45202 30.0539 1.57749L36.6602 5.10053C37.2249 5.40169 37.2249 6.21115 36.6602 6.51232L30.0539 10.0354C29.8186 10.1608 29.5363 10.1608 29.301 10.0354L22.6946 6.51232C22.1299 6.21115 22.1299 5.40169 22.6946 5.10053L29.301 1.57749ZM1.29032 15.9572C1.29032 15.3532 1.9339 14.9671 2.46678 15.2513L9.25388 18.8709C9.51457 19.0099 9.67742 19.2813 9.67742 19.5768V26.6235C9.67742 27.2274 9.03385 27.6136 8.50096 27.3294L1.71387 23.7098C1.45317 23.5707 1.29032 23.2993 1.29032 23.0039V15.9572ZM19.3548 23.0039C19.3548 23.2993 19.192 23.5707 18.9313 23.7098L12.1442 27.3294C11.6113 27.6136 10.9677 27.2274 10.9677 26.6235V19.5768C10.9677 19.2813 11.1306 19.0099 11.3912 18.8709L18.1783 15.2507C18.7112 14.9665 19.3548 15.3527 19.3548 15.9566V23.0039ZM10.9677 29.8994C10.9677 29.6039 11.1306 29.3325 11.3912 29.1935L18.1783 25.5733C18.7112 25.2891 19.3548 25.6753 19.3548 26.2792V33.3265C19.3548 33.6219 19.192 33.8933 18.9313 34.0324L12.1442 37.652C11.6113 37.9362 10.9677 37.55 10.9677 36.9461V29.8994ZM20.6452 18.5379C20.6452 17.9339 21.2888 17.5478 21.8216 17.832L24.563 19.2941C25.1277 19.5953 25.1277 20.4047 24.563 20.7059L21.8216 22.168C21.2888 22.4522 20.6452 22.0661 20.6452 21.4621V18.5379ZM21.0687 15.9678C20.808 15.8288 20.6452 15.5574 20.6452 15.2619V8.21521C20.6452 7.61128 21.2887 7.22513 21.8216 7.50932L28.6087 11.1289C28.8694 11.268 29.0323 11.5394 29.0323 11.8348V18.8815C29.0323 19.4855 28.3887 19.8716 27.8558 19.5874L21.0687 15.9678ZM9.94614 9.31944C10.1814 9.19397 10.4637 9.19397 10.699 9.31944L17.3053 12.8425C17.8701 13.1436 17.8701 13.9531 17.3053 14.2543L10.699 17.7773C10.4637 17.9028 10.1814 17.9028 9.94614 17.7773L3.33981 14.2543C2.77507 13.9531 2.77507 13.1436 3.33981 12.8425L9.94614 9.31944ZM1.29032 26.2798C1.29032 25.6758 1.9339 25.2897 2.46678 25.5739L9.25388 29.1935C9.51457 29.3325 9.67742 29.6039 9.67742 29.8994V36.9461C9.67742 37.55 9.03385 37.9362 8.50096 37.652L1.71387 34.0324C1.45317 33.8933 1.29032 33.6219 1.29032 33.3265V26.2798ZM20.6452 26.2798C20.6452 25.6758 21.2887 25.2897 21.8216 25.5739L28.6087 29.1935C28.8694 29.3325 29.0323 29.6039 29.0323 29.8994V36.9461C29.0323 37.55 28.3887 37.9362 27.8558 37.652L21.0687 34.0324C20.808 33.8933 20.6452 33.6219 20.6452 33.3265V26.2798ZM31.499 37.652C30.9662 37.9362 30.3226 37.55 30.3226 36.9461V29.8994C30.3226 29.6039 30.4854 29.3325 30.7461 29.1935L37.5332 25.5733C38.0661 25.2891 38.7097 25.6753 38.7097 26.2792V33.3265C38.7097 33.6219 38.5468 33.8933 38.2861 34.0324L31.499 37.652ZM36.6601 23.1651C37.2249 23.4662 37.2249 24.2757 36.6602 24.5769L30.0539 28.0999C29.8186 28.2254 29.5363 28.2254 29.301 28.0999L22.6947 24.5769C22.1299 24.2757 22.1299 23.4662 22.6947 23.1651L26.8816 20.9324C27.1169 20.8069 27.3992 20.8069 27.6345 20.9324L29.3735 21.86C29.4672 21.9095 29.5715 21.9354 29.6774 21.9354C29.7833 21.9354 29.8877 21.9095 29.9813 21.86L31.7203 20.9324C31.9556 20.8069 32.2379 20.8069 32.4733 20.9324L36.6601 23.1651ZM31.499 19.5874C30.9662 19.8716 30.3226 19.4855 30.3226 18.8815V11.8348C30.3226 11.5394 30.4854 11.268 30.7461 11.1289L37.5332 7.50879C38.0661 7.22456 38.7097 7.61071 38.7097 8.21466V15.2619C38.7097 15.5574 38.5468 15.8288 38.2861 15.9678L31.499 19.5874Z" fill="#EC8F6A"/>
</svg>


                        <ServicesTitle>Remodeling</ServicesTitle>
                        <ServiceParagraph>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, Nemo enim ipsam voluptatem</ServiceParagraph>
                    </ServiceSection>
                    <ServiceSection>
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37.4434 15.985H34.9843C34.6768 15.985 34.4276 16.2342 34.4276 16.5417V18.3852C34.4276 18.4173 34.4015 18.4434 34.3694 18.4434H26.3773C26.0699 18.4434 25.8207 18.6925 25.8207 19V21.4592C25.8207 21.7667 26.0699 22.0158 26.3773 22.0158H29.5094V23.9183V32.5252V34.4277H19.6148C19.5827 34.4277 19.5566 34.4016 19.5566 34.3695V28.8365C19.5566 28.529 19.3075 28.2799 19 28.2799H16.5409C16.2334 28.2799 15.9843 28.529 15.9843 28.8365V34.3695C15.9843 34.4017 15.9581 34.4277 15.9261 34.4277H15.2532V33.1189C15.2532 32.678 15.0035 32.2947 14.6385 32.1017V30.6808C14.6385 29.3569 13.5613 28.2799 12.2374 28.2799C10.9135 28.2799 9.83643 29.3569 9.83643 30.6808V32.1017C9.47135 32.2947 9.22168 32.678 9.22168 33.1189V34.4277H3.63056C3.59842 34.4277 3.57237 34.4016 3.57237 34.3695V28.1636H8.54881C9.19474 28.1636 9.72021 27.6382 9.72021 26.9922V22.0159H15.9261C15.9582 22.0159 15.9843 22.042 15.9843 22.074V23.9183C15.9843 24.2258 16.2334 24.475 16.5409 24.475H19C19.3075 24.475 19.5566 24.2258 19.5566 23.9183V22.074C19.5566 22.0419 19.5828 22.0159 19.6148 22.0159H21.4591C21.7666 22.0159 22.0157 21.7667 22.0157 21.4592V19C22.0157 18.6925 21.7666 18.4434 21.4591 18.4434H19.6148C19.5827 18.4434 19.5566 18.4172 19.5566 18.3852V16.5408C19.5566 16.2333 19.3075 15.9842 19 15.9842H16.5409C16.2334 15.9842 15.9843 16.2333 15.9843 16.5408V18.3852C15.9843 18.4173 15.9581 18.4434 15.9261 18.4434H15.1578C14.8504 18.4434 14.6012 18.6925 14.6012 19C14.6012 19.3075 14.8504 19.5566 15.1578 19.5566H15.9261C16.572 19.5566 17.0976 19.0312 17.0976 18.3852V17.0975H18.4434V18.3852C18.4434 19.0312 18.9688 19.5566 19.6148 19.5566H20.9024V20.9025H19.6148C18.9688 20.9025 18.4434 21.428 18.4434 22.0739V23.3616H17.0976V22.0739C17.0976 21.428 16.572 20.9025 15.9261 20.9025H3.63056C2.98463 20.9025 2.45909 21.428 2.45909 22.0739V34.3694C2.45909 35.0154 2.98463 35.5409 3.63056 35.5409H15.9261C16.572 35.5409 17.0976 35.0154 17.0976 34.3694V29.3931H18.4434V34.3694C18.4434 35.0154 18.9688 35.5409 19.6148 35.5409H34.3694C35.0154 35.5409 35.5409 35.0154 35.5409 34.3694V22.0739C35.5409 21.428 35.0154 20.9025 34.3694 20.9025H26.934V19.5566H34.3694C35.0154 19.5566 35.5409 19.0312 35.5409 18.3852V17.0983H36.8867V36.8286C36.8867 36.8607 36.8606 36.8867 36.8286 36.8867H1.17139C1.13933 36.8867 1.11328 36.8606 1.11328 36.8286V1.17139C1.11328 1.13941 1.13941 1.11328 1.17139 1.11328H30.1823C30.4898 1.11328 30.739 0.864129 30.739 0.556641C30.739 0.249152 30.4898 0 30.1823 0H1.17139C0.525469 0 0 0.525469 0 1.17139V36.8286C0 37.4745 0.525469 38 1.17139 38H36.8286C37.4745 38 38 37.4745 38 36.8286V16.5417C38 16.2342 37.7508 15.985 37.4434 15.985ZM3.63056 22.0158H5.53301V23.3035C5.53301 23.611 5.78216 23.8601 6.08965 23.8601C6.39714 23.8601 6.64629 23.611 6.64629 23.3035V22.0158H8.60693V26.9922C8.60693 27.0242 8.5808 27.0503 8.54881 27.0503H3.57237V22.0739C3.57237 22.0419 3.59842 22.0158 3.63056 22.0158ZM12.2374 29.3931C12.9475 29.3931 13.5252 29.9707 13.5252 30.6808V31.9685H10.9498V30.6808C10.9497 29.9707 11.5274 29.3931 12.2374 29.3931ZM10.335 34.4276V33.1189C10.335 33.0984 10.3517 33.0817 10.3721 33.0817H14.1028C14.1232 33.0817 14.1399 33.0984 14.1399 33.1189V34.4276H10.335ZM34.4276 31.9685H30.6227V24.4749H34.4277V31.9685H34.4276ZM34.3694 34.4276H30.6227V33.0817H34.4277V34.3694C34.4276 34.4016 34.4016 34.4276 34.3694 34.4276ZM34.4276 22.0739V23.3616H30.6227V22.0158H34.3694C34.4016 22.0158 34.4276 22.0419 34.4276 22.0739Z" fill="#EC8F6A"/>
<path d="M36.8269 0H32.4004C32.0925 0 31.843 0.251253 31.843 0.561334C31.843 0.871414 32.0925 1.12267 32.4004 1.12267H36.8269C36.859 1.12267 36.8851 1.14901 36.8851 1.18127V11.1605L35.5372 11.1606V3.66117C35.5372 3.0098 35.0109 2.47982 34.364 2.47982H19.5868C18.9399 2.47982 18.4137 3.0098 18.4137 3.66117V11.1593H17.0658V3.66117C17.0658 3.0098 16.5395 2.47982 15.8926 2.47982H3.57832C2.93141 2.47982 2.40506 3.0098 2.40506 3.66117V18.5402C2.40506 19.1916 2.93141 19.7215 3.57832 19.7215H12.8933C13.2012 19.7215 13.4508 19.4703 13.4508 19.1602C13.4508 18.8501 13.2012 18.5989 12.8933 18.5989H3.57832C3.54613 18.5989 3.52004 18.5725 3.52004 18.5402V3.66117C3.52004 3.62876 3.54621 3.60249 3.57832 3.60249H4.86797V14.8417C4.86797 15.4814 5.3848 16.0017 6.02011 16.0017H13.4508C14.0861 16.0017 14.603 15.4814 14.603 14.8417V3.60249H15.8926C15.9248 3.60249 15.9509 3.62883 15.9509 3.66117V11.7206C15.9509 12.0307 16.2004 12.282 16.5084 12.282H18.9712C19.2791 12.282 19.5286 12.0307 19.5286 11.7206V3.66117C19.5286 3.62876 19.5548 3.60249 19.5868 3.60249H23.3393V4.9223C23.3393 5.56199 23.8562 6.08239 24.4915 6.08239H30.6907C31.3261 6.08239 31.8429 5.56199 31.8429 4.9223V3.60249H34.3639C34.3961 3.60249 34.4222 3.62883 34.4222 3.66117V11.7219C34.4222 11.8708 34.4809 12.0135 34.5854 12.1189C34.69 12.2241 34.8318 12.2833 34.9797 12.2833L37.4425 12.2832C37.7505 12.2832 38 12.0318 38 11.7218V1.18127C38.0001 0.529899 37.4738 0 36.8269 0V0ZM11.0251 3.60249V4.9223C11.0251 4.94288 11.0084 4.95972 10.9879 4.95972H8.48295C8.46251 4.95972 8.44578 4.94288 8.44578 4.9223V3.60249H11.0251ZM13.4508 14.8791H6.02011C5.99967 14.8791 5.98295 14.8622 5.98295 14.8417V8.56221H13.488V14.8417C13.4879 14.8622 13.4713 14.8791 13.4508 14.8791ZM13.4879 7.43954H5.98295V3.60249H7.3308V4.9223C7.3308 5.56199 7.84763 6.08239 8.48295 6.08239H10.9879C11.6232 6.08239 12.1401 5.56199 12.1401 4.9223V3.60249H13.488V7.43954H13.4879ZM30.728 4.9223C30.728 4.94288 30.7113 4.95972 30.6908 4.95972H24.4915C24.4711 4.95972 24.4544 4.94288 24.4544 4.9223V3.60249H30.728V4.9223Z" fill="#EC8F6A"/>
<path d="M32.4684 27.4177C32.8669 27.4177 33.1899 27.1403 33.1899 26.7979V26.1134C33.1899 25.7711 32.8669 25.4937 32.4684 25.4937C32.0698 25.4937 31.7468 25.7711 31.7468 26.1134V26.7979C31.7468 27.1403 32.0699 27.4177 32.4684 27.4177Z" fill="#EC8F6A"/>
<path d="M32.4684 30.7848C32.8669 30.7848 33.1899 30.5768 33.1899 30.32V29.8066C33.1899 29.5498 32.8669 29.3418 32.4684 29.3418C32.0698 29.3418 31.7468 29.5498 31.7468 29.8066V30.32C31.7468 30.5768 32.0699 30.7848 32.4684 30.7848Z" fill="#EC8F6A"/>
<path d="M32.0276 13.4683C32.6685 13.4683 33.1899 12.9333 33.1899 12.2757V8.40781C33.1899 7.75015 32.6685 7.21515 32.0276 7.21515H23.2889C22.648 7.21515 22.1266 7.75015 22.1266 8.40781V12.2757C22.1266 12.9333 22.648 13.4683 23.2889 13.4683H32.0276ZM29.5804 8.36934V9.72613C29.5804 9.74729 29.5636 9.7646 29.543 9.7646H25.7735C25.7529 9.7646 25.736 9.74729 25.736 9.72613V8.36934H29.5804ZM23.2514 12.2757V8.40781C23.2514 8.38665 23.2683 8.36934 23.2889 8.36934H24.6112V9.72613C24.6112 10.3838 25.1326 10.9188 25.7735 10.9188H29.543C30.1839 10.9188 30.7053 10.3838 30.7053 9.72613V8.36934H32.0276C32.0482 8.36934 32.0651 8.38665 32.0651 8.40781V12.2757C32.0651 12.2968 32.0482 12.3141 32.0276 12.3141H23.2889C23.2683 12.3141 23.2514 12.2968 23.2514 12.2757Z" fill="#EC8F6A"/>
</svg>


                        <ServicesTitle>Full Project</ServicesTitle>
                        <ServiceParagraph>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, Nemo enim ipsam voluptatem</ServiceParagraph>
                    </ServiceSection>
                    <ServiceSection>
                    <svg width="32" height="41" viewBox="0 0 32 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.1166 16.2418L28.9607 13.8433C29.3797 13.1311 29.5293 12.3009 29.3803 11.4788C29.2164 10.5747 28.7123 9.7889 27.9609 9.26613L24.8503 7.10213C24.8699 6.59696 24.7776 6.08958 24.5733 5.61144C24.2124 4.76718 23.5464 4.11477 22.6976 3.77435L15.8186 1.01545C14.9848 0.681081 14.0764 0.690116 13.2606 1.02692C12.64 0.393533 11.778 0 10.826 0H3.42041C1.53439 0 0 1.54341 0 3.44052V32.9619C0 36.9128 3.19546 40.127 7.12317 40.127C8.91062 40.127 10.5462 39.4611 11.7982 38.3634C11.8162 38.3505 11.8337 38.3368 11.8505 38.3216L25.1866 26.2492C25.427 26.0315 25.4466 25.659 25.2302 25.4171C25.0137 25.1751 24.6431 25.1555 24.4029 25.3732L23.8535 25.8706L22.0684 23.8847L24.871 19.8085L27.4189 22.643L26.2596 23.6925C26.0192 23.9102 25.9997 24.2828 26.216 24.5247C26.3317 24.654 26.4914 24.7197 26.6516 24.7197C26.7913 24.7197 26.9314 24.6698 27.0434 24.5685L30.8735 21.1013C31.5512 20.4849 31.9496 19.6399 31.9956 18.7221C32.0415 17.8044 31.7294 16.9234 31.1166 16.2418ZM28.2277 11.6901C28.3354 12.2844 28.2065 12.8855 27.8648 13.3825L26.2742 15.696L22.6529 13.1769L24.57 8.34016L27.2945 10.2355C27.7886 10.5791 28.12 11.0957 28.2277 11.6901ZM22.6597 20.9529L20.2383 19.2684L22.2077 14.3L25.6077 16.6652L22.6597 20.9529ZM19.0453 26.2099L17.8237 25.36L19.7931 20.3916L21.9933 21.9222L19.0453 26.2099ZM19.947 16.8215L18.2493 16.1406C17.9489 16.0201 17.6081 16.1674 17.4882 16.4697C17.3684 16.772 17.5149 17.1147 17.8154 17.2353L19.513 17.9162L17.5007 22.9929L14.2464 21.6877V15.8039L15.4863 16.3012C15.5574 16.3297 15.6308 16.3432 15.703 16.3432C15.9357 16.3432 16.1559 16.2027 16.2473 15.9721C16.3671 15.6697 16.2207 15.327 15.9202 15.2064L14.2464 14.5352V8.65143L21.9593 11.7448L19.947 16.8215ZM13.0748 13.1439H6.43928C6.11576 13.1439 5.85348 13.4078 5.85348 13.7332C5.85348 14.0586 6.11576 14.3224 6.43928 14.3224H13.0748V19.7878H1.17159V14.3224H3.94278C4.26629 14.3224 4.52857 14.0586 4.52857 13.7332C4.52857 13.4078 4.26629 13.1439 3.94278 13.1439H1.17159V7.67856H13.0748L13.0748 13.1439ZM1.17159 20.9663H13.0748V26.4317H1.17159V20.9663ZM14.2464 22.9563L17.0668 24.0875L14.2464 31.2029V22.9563ZM17.8967 29.9523L18.5463 30.675L15.5101 33.4234L17.8967 29.9523ZM15.3652 31.5624L17.3785 26.4831L18.379 27.1791L15.3652 31.5624ZM15.3847 2.11018L22.2637 4.86907C22.8217 5.09283 23.2596 5.52179 23.4968 6.07686C23.66 6.45845 23.7147 6.86832 23.6607 7.26955C23.6598 7.27419 23.6593 7.2789 23.6585 7.28354C23.6335 7.46117 23.5874 7.63708 23.5196 7.80796L22.3931 10.6501L14.2464 7.38269V3.44052C14.2464 2.93944 14.1385 2.46341 13.9462 2.03358C14.4162 1.89994 14.9184 1.92312 15.3847 2.11018ZM3.42041 1.17848H10.826C12.0659 1.17848 13.0748 2.19322 13.0748 3.44052V6.50016H1.17159V3.44052C1.17159 2.19322 2.1804 1.17848 3.42041 1.17848ZM1.17159 32.9619V27.6101H13.0748V32.9619C13.0748 36.263 10.4049 38.9485 7.12317 38.9485C3.84148 38.9485 1.17159 36.2629 1.17159 32.9619ZM22.9826 26.659L19.4172 29.8866L18.5812 28.9566L21.3838 24.8804L22.9826 26.659ZM30.8255 18.6629C30.7953 19.2664 30.5333 19.8218 30.0887 20.2262L28.2898 21.8547L25.5555 18.8129L28.2827 14.8464L30.2475 17.0321C30.6504 17.4803 30.8557 18.0595 30.8255 18.6629Z" fill="#EC8F6A"/>
<path d="M6.85713 29.9682C5.31668 29.9682 4.06348 31.3354 4.06348 33.0159C4.06348 34.6963 5.31668 36.0635 6.85713 36.0635C8.39757 36.0635 9.65078 34.6963 9.65078 33.0159C9.65078 31.3354 8.39757 29.9682 6.85713 29.9682ZM6.85713 34.7925C5.95913 34.7925 5.2286 33.9956 5.2286 33.0159C5.2286 32.0363 5.95913 31.2394 6.85713 31.2394C7.75513 31.2394 8.48566 32.0363 8.48566 33.0159C8.48566 33.9956 7.75513 34.7925 6.85713 34.7925Z" fill="#EC8F6A"/>
</svg>


                        <ServicesTitle>Design</ServicesTitle>
                        <ServiceParagraph>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, Nemo enim ipsam voluptatem</ServiceParagraph>
                    </ServiceSection>
                    <ServiceSection>

                    </ServiceSection>
                    <ServiceSection>

                    </ServiceSection>
                </ServicesContainer>
            </AboutContainer>  
        </>
    )
}

export default About
