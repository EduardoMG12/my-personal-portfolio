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
                header: string,
                footer: string
            }
        } 
    }