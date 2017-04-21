export class Procuracao {
    constructor(
        public niTitular: string,
        public niProcurador: string,
        public dtInicioVigencia: string,
        public dtFimVigencia: string,
        public sistemas: string[],
        public id?: number,
        public status?:string
    ) { }
}
