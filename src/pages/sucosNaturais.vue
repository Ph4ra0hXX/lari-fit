```vue
<script>
import { ref } from "vue";
import { carrinhoStore } from "../store/produtos";
import { useToast } from "vue-toastification";
import router from "../router/index";

export default {
  setup() {
    const toast = useToast();
    const carrinho = carrinhoStore();

    const SucosNaturais = ref({
      tipos: [
        {
          nome: "CAFÉ SEM AÇÚCAR",
          preco: 2.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "CAFÉ COM ADOÇANTE",
          preco: 2.5,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "CAPPUCINO FIT 120ml",
          preco: 4.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "COCA ZERO LATA 350ml",
          preco: 5.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "SUCO DE ACEROLA COM LIMÃO",
          preco: 8.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "SUCO DE ABACAXI COM HORTELÃ",
          preco: 9.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "SUCO DE LARANJA COM MORANGO",
          preco: 11.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "CHOCOLATE QUENTE FIT 240ml",
          preco: 12.0,
          quantidade: 0,
          descricao: "",
        },
      ],
    });

    function salvarPedido() {
      carrinho.sucosNaturais.push(SucosNaturais.value);
      router.push("/");
      toast.success("Adicionado com sucesso!", {
        timeout: 2000,
        position: "top-right",
        icon: false,
        showCloseButtonOnHover: true,
      });
    }

    function voltar() {
      router.push("/");
    }

    return {
      SucosNaturais,
      salvarPedido,
      voltar,
    };
  },
};
</script>

<template>
  <div id="cardapio">
    <div id="listar">
      <div class="dotted-line">
        <hr />
        <span id="textDividers">Sucos Naturais e Outros</span>
        <hr />
      </div>
      <div v-for="(item, index) in SucosNaturais.tipos" :key="item">
        <button class="botao1" @click="item.quantidade++">+</button>
        <button
          v-if="item.quantidade > 0"
          class="botao2"
          @click="item.quantidade--"
        >
          -
        </button>
        <label style="pointer-events: none" id="nomeItem" for="adicional">
          <span id="quantidadeDiv">{{ item.quantidade }}x</span>
          {{ item.nome }}
        </label>
        <label id="preco">R$: {{ item.preco.toFixed(2) }}</label>
        <p id="itens">{{ item.descricao }}</p>
        <br />
      </div>
      <button @click="salvarPedido" id="butOpcoes" type="submit" value="Submit">
        adicionar
      </button>
      <button id="butOpcoes2" @click="voltar()" type="submit" value="Submit">
        voltar
      </button>
    </div>
  </div>
</template>

<style>
/* Add your styles here */
</style>
```
