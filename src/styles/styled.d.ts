import 'styled-components';

    declare module 'styled-components'{
        export interface DefaultTheme { 
           
            title: string,

            colors:{
                primary: string,
                secundary: string,
                ballonCard:string,
                iconsBgdCard:string,
                iconsCard:string,
                borderHeader:string,
                header: string,
                headerText: string,
                headerTextHover: string,
                footer: string
            }
        } 
    }