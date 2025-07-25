import { defineStore } from "pinia";

export const carrinhoStore = defineStore("carrinho", {
  state: () => {
    return {
      burgers: [],
      macarronadas: [],
      batatas: [],
      combos: [],
      bebidas: [],
      sobremesas: [],
      lacup: [],
      crepiocaFit: [],
      pizzasFit: [],
      tapiocasRecheadas: [],
      tapiocasDoces: [],
      sanduichesNaturais: [],
      panquecasFit: [],
      sucosNaturais: [],
      detoxVerdeAntioxidante: [],
      shakesProteicos: [],
      cuscuzRecheado: [],
      dadosPessoais: {
        nome: "",
        rua: "",
        bairro: "",
        numero: "",
        referencia: "",
        formaDeEntrega: "",
        formaDePagamento: "",
        troco: "",
      },
      pedidos: [],
      valorTotal: 0,
      quantidadeDeItens: 0,
      observacao: "",
    };
  },
  getters: {
    getValorTotal() {
      let total = 0;

      var pedidos = [
        ...this.burgers,
        ...this.macarronadas,
        ...this.batatas,
        ...this.combos,
        ...this.sobremesas,
        ...this.bebidas,
        ...this.lacup,
        ...this.crepiocaFit,
        ...this.pizzasFit,
        ...this.tapiocasRecheadas,
        ...this.tapiocasDoces,
        ...this.sanduichesNaturais,
        ...this.panquecasFit,
        ...this.sucosNaturais,
        ...this.detoxVerdeAntioxidante,
        ...this.shakesProteicos,
        ...this.cuscuzRecheado,
      ];

      pedidos.forEach((categoria) => {
        for (const chave in categoria) {
          categoria[chave].forEach((item) => {
            total += item.preco * item.quantidade;
          });
        }
      });

      return total.toFixed(2);
    },
    getTotalPedidos() {
      return (
        this.burgers.length +
        this.macarronadas.length +
        this.batatas.length +
        this.combos.length +
        this.sobremesas.length +
        this.bebidas.length +
        this.lacup.length +
        this.crepiocaFit.length +
        this.pizzasFit.length +
        this.tapiocasRecheadas.length +
        this.tapiocasDoces.length +
        this.sanduichesNaturais.length +
        this.panquecasFit.length +
        this.sucosNaturais.length +
        this.detoxVerdeAntioxidante.length +
        this.shakesProteicos.length +
        this.cuscuzRecheado.length
      );
    },
  },
});

export const produtosStore = defineStore("produto", {
  state: () => {
    return {
      cardDataStore: [
        {
          id: 7,
          nome: "LACUP",
          img: "8.webp",
          descricao: "Copo de frutas frescas com cremes diversos.",
          url: "/lacup",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 8,
          nome: "CREPIOCA FIT",
          img: "6.webp",
          descricao:
            "Preparadas com uma base leve e proteica, nossas crepiocas são livres de farinha refinada, glúten e lactose.",
          url: "/crepioca-fit",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 9,
          nome: "PIZZAS FIT (4 FATIAS)",
          img: "2.webp",
          descricao:
            "Pensadas para quem quer manter o equilíbrio sem abrir mão do prazer de comer bem.",
          url: "/pizzas-fit",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 10,
          nome: "TAPIOCAS RECHEADAS",
          img: "13.webp",
          descricao:
            "Nossas tapiocas são feitas com base leve, sem glúten, sem lactose e cheias de sabor.",
          url: "/tapiocas-recheadas",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 11,
          nome: "TAPIOCAS DOCES",
          img: "14.webp",
          descricao:
            "Preparadas com uma base leve e proteica, nossas crepiocas são livres de farinha refinada, glúten e lactose.",
          url: "/tapiocas-doces",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 12,
          nome: "SANDUÍCHES NATURAIS",
          img: "5.webp",
          descricao:
            "Pão integral 12 grãos sem açúcar + recheios frescos e ricos em proteína.",
          url: "/sanduiches-naturais",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 18,
          nome: "CUSCUZ RECHEADO",
          img: "11.webp",
          descricao: "Cuscuz recheado com opções saudáveis e saborosas.",
          url: "/cuscuz-recheado",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 13,
          nome: "PANQUECAS FIT",
          img: "4.webp",
          descricao:
            "Leve, saborosa e naturalmente doce. Ideal para qualquer hora do dia.",
          url: "/panquecas-fit",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 14,
          nome: "SUCOS NATURAIS",
          img: "7.webp",
          descricao: "Sucos naturais variados.",
          url: "/sucos-naturais",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 15,
          nome: "DETOX, VERDE E ANTIOXIDANTE",
          img: "9.webp",
          descricao: "Sucos detox, verdes e antioxidantes.",
          url: "/detox-verde-antioxidante",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 16,
          nome: "SHAKES PROTEICOS",
          img: "10.webp",
          descricao: "Shakes proteicos variados.",
          url: "/shakes-proteicos",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
      ],
    };
  },
});

export const produtosStore2 = defineStore("produto2", {
  state: () => {
    return {
      cardDataStore: [
        {
          id: 7,
          nome: "LACUP",
          img: "8.webp",
          descricao: "Copo de frutas frescas com cremes diversos.",
          url: "/lacup",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 8,
          nome: "CREPIOCA FIT",
          img: "6.webp",
          descricao:
            "Preparadas com uma base leve e proteica, nossas crepiocas são livres de farinha refinada, glúten e lactose.",
          url: "/crepioca-fit",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 9,
          nome: "PIZZAS FIT (4 FATIAS)",
          img: "2.webp",
          descricao:
            "Pensadas para quem quer manter o equilíbrio sem abrir mão do prazer de comer bem.",
          url: "/pizzas-fit",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 10,
          nome: "TAPIOCAS RECHEADAS",
          img: "13.webp",
          descricao:
            "Nossas tapiocas são feitas com base leve, sem glúten, sem lactose e cheias de sabor.",
          url: "/tapiocas-recheadas",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 11,
          nome: "TAPIOCAS DOCES",
          img: "14.webp",
          descricao:
            "Preparadas com uma base leve e proteica, nossas crepiocas são livres de farinha refinada, glúten e lactose.",
          url: "/tapiocas-doces",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 12,
          nome: "SANDUÍCHES NATURAIS",
          img: "5.webp",
          descricao:
            "Pão integral 12 grãos sem açúcar + recheios frescos e ricos em proteína.",
          url: "/sanduiches-naturais",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 18,
          nome: "CUSCUZ RECHEADO",
          img: "11.webp",
          descricao: "Cuscuz recheado com opções saudáveis e saborosas.",
          url: "/cuscuz-recheado",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 13,
          nome: "PANQUECAS FIT",
          img: "4.webp",
          descricao:
            "Leve, saborosa e naturalmente doce. Ideal para qualquer hora do dia.",
          url: "/panquecas-fit",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 14,
          nome: "SUCOS NATURAIS",
          img: "7.webp",
          descricao: "Sucos naturais variados.",
          url: "/sucos-naturais",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 15,
          nome: "DETOX, VERDE E ANTIOXIDANTE",
          img: "9.webp",
          descricao: "Sucos detox, verdes e antioxidantes.",
          url: "/detox-verde-antioxidante",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 16,
          nome: "SHAKES PROTEICOS",
          img: "10.webp",
          descricao: "Shakes proteicos variados.",
          url: "/shakes-proteicos",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
      ],
    };
  },
});
