import { Sistema } from './Sistema';
export class Procuracao {
    constructor(
        public niTitular: string,
        public niProcurador: string,
        public dataInicioVigencia: string,
        public dataFimVigencia: string,
        public sistemas?: Sistema[],
        public id?: number,
        public situacao?:string,
        public isn?:string,
        public origem?:string
    ) { }
}

/*
{
"isn":"0000016895",
"niTitular":"68281455500   ",
"niProcurador":"19007809334   ",
"dataInicioVigencia":"20150715",
"dataFimVigencia":"20150715",
"horaInicioVigencia":null,
"horaFimVigencia":null,
"situacao":"A",
"origem":"Receita Federal",
"tipoNiTitular":null,
"tipoNiProcurado":null,
"sistemas":[
    {"isn":"0000000090","codigo":"00090","sigla":"e-AssinaRFB         ","descricao":"e-AssinaRFB                                                                                         ","tipoAcesso":"3"},
    {"isn":"0000000078","codigo":"00078","sigla":"PARCPREVI           ","descricao":"Parcelamento Simplificado PrevidenciÃ¡rio                                                            ","tipoAcesso":"3"}
*/