import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.sistema.html',
})
export class AppListSistema {
    sistemas = [
    {
        "isn": 1,
        "codigo": 49146,
        "sigla": "Darnley Computing",
        "descricao": "libero risus in",
        "tipoPessoa": 2
    },
    {
        "isn": 2,
        "codigo": 93548,
        "sigla": "Wolz Services",
        "descricao": "eros suspendisse molestie",
        "tipoPessoa": 1
    },
    {
        "isn": 3,
        "codigo": 59105,
        "sigla": "Sutliff Corporation",
        "descricao": "elementum lacus lacus",
        "tipoPessoa": 3
    },
    {
        "isn": 4,
        "codigo": 84381,
        "sigla": "Kish Technologies",
        "descricao": "libero sit ipsum",
        "tipoPessoa": 1
    },
    {
        "isn": 5,
        "codigo": 96716,
        "sigla": "Morin International",
        "descricao": "hendrerit vel magna",
        "tipoPessoa": 1
    },
    {
        "isn": 6,
        "codigo": 40022,
        "sigla": "Mcwethy Services",
        "descricao": "ac porttitor consequat",
        "tipoPessoa": 2
    },
    {
        "isn": 7,
        "codigo": 10243,
        "sigla": "Shaffer Services",
        "descricao": "amet tortor tortor",
        "tipoPessoa": 2
    },
    {
        "isn": 8,
        "codigo": 30272,
        "sigla": "Cory Corporation",
        "descricao": "donec odio sed",
        "tipoPessoa": 2
    },
    {
        "isn": 9,
        "codigo": 64399,
        "sigla": "Oconnor Foods",
        "descricao": "odio augue odio",
        "tipoPessoa": 3
    },
    {
        "isn": 10,
        "codigo": 94749,
        "sigla": "Wing International",
        "descricao": "aliquam amet neque",
        "tipoPessoa": 1
    },
    {
        "isn": 11,
        "codigo": 50929,
        "sigla": "Prezzavento Incorporated",
        "descricao": "adipiscing at curabitur",
        "tipoPessoa": 1
    },
    {
        "isn": 12,
        "codigo": 14813,
        "sigla": "Dixon Services",
        "descricao": "velit vitae sed",
        "tipoPessoa": 3
    },
    {
        "isn": 13,
        "codigo": 80531,
        "sigla": "Etheridge Shipping",
        "descricao": "magna sit facilisis",
        "tipoPessoa": 1
    },
    {
        "isn": 14,
        "codigo": 45916,
        "sigla": "Kilpatrick Shipping",
        "descricao": "dolor elit consectetur",
        "tipoPessoa": 1
    },
    {
        "isn": 15,
        "codigo": 23936,
        "sigla": "Richardson Global",
        "descricao": "nunc at id",
        "tipoPessoa": 2
    },
    {
        "isn": 16,
        "codigo": 53437,
        "sigla": "Swift Technologies",
        "descricao": "elit curabitur placerat",
        "tipoPessoa": 2
    },
    {
        "isn": 17,
        "codigo": 29565,
        "sigla": "Graves LLC",
        "descricao": "et fringilla sollicitudin",
        "tipoPessoa": 1
    },
    {
        "isn": 18,
        "codigo": 13698,
        "sigla": "French Technologies",
        "descricao": "fringilla sed aenean",
        "tipoPessoa": 2
    },
    {
        "isn": 19,
        "codigo": 99488,
        "sigla": "Gonzalez Global",
        "descricao": "morbi nec neque",
        "tipoPessoa": 3
    },
    {
        "isn": 20,
        "codigo": 13516,
        "sigla": "Jezak and Sons",
        "descricao": "magna lacus amet",
        "tipoPessoa": 3
    }
];

    constructor() {
       console.log(this.sistemas.length)
    }
}