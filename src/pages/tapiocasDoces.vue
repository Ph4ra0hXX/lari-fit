<script>
import { ref } from "vue";
import { carrinhoStore } from "../store/produtos";
import { useToast } from "vue-toastification";
import router from "../router/index";

export default {
  setup() {
    const toast = useToast();
    const carrinho = carrinhoStore();

    const TapiocasDoces = ref({
      tipos: [
        {
          nome: "TAPIOCA DE BANANA COM DOCE DE LEITE",
          preco: 9.0,
          quantidade: 0,
          descricao:
            "Pasta de amendoim sabor doce de leite + rodelas de banana",
        },
        {
          nome: "TAPIOCA DE MORANGO COM AVELÃ",
          preco: 11.0,
          quantidade: 0,
          descricao:
            "Pasta de amendoim sabor avelã + rodelas de morango fresco",
        },
        {
          nome: "TAPIOCA DE UVA COM CHOCOLATE BRANCO",
          preco: 9.0,
          quantidade: 0,
          descricao:
            "Pasta de amendoim sabor chocolate branco + rodelas de uva verde",
        },
      ],
    });

    function salvarPedido() {
      carrinho.tapiocasDoces.push(TapiocasDoces.value);
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
      TapiocasDoces,
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
        <span id="textDividers">Tapiocas Doces</span>
        <hr />
      </div>
      <div v-for="(item, index) in TapiocasDoces.tipos" :key="item">
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
