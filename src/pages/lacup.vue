<script>
import { ref } from "vue";
import { carrinhoStore } from "../store/produtos";
import { useToast } from "vue-toastification";
import router from "../router/index";

export default {
  setup() {
    const toast = useToast();
    const carrinho = carrinhoStore();

    const Lacup = ref({
      tipos: [
        {
          nome: "LACUP DOLCEMIX",
          preco: 24.99,
          quantidade: 0,
          descricao:
            "Morango fresco com banana, creme de chocolate 60%, finalizado com castanha triturada e hortelã.",
        },
        {
          nome: "LACUP LAVITTA",
          preco: 14.9,
          quantidade: 0,
          descricao:
            "Camadas de abacaxi, creme de manga e uva verde formam um lecup leve, vibrante e cheio de frescor natural.",
        },
        {
          nome: "LACUP BANUV",
          preco: 15.9,
          quantidade: 0,
          descricao:
            "Banana, mamão e uva em camadas frescas, finalizado com iogurte natural, chia e mel.",
        },
        {
          nome: "LACUP ROSYQUE",
          preco: 23.99,
          quantidade: 0,
          descricao:
            "Creme de whey chocolate branco, pitaya rosa e o kiwi fresco, com um toque delicado de chia para equilibrar.",
        },
        {
          nome: "LACUP DOCELLA",
          preco: 24.9,
          quantidade: 0,
          descricao:
            "Morango e uva verde em camadas com creme de whey de doce de leite cremoso, finalizado com paçoquita.",
        },
        {
          nome: "LACUP ZENFIT",
          preco: 17.99,
          quantidade: 0,
          descricao:
            "Melão, maçã verde e iogurte natural, finalizado com granola crocante.",
        },
      ],
    });

    function salvarPedido() {
      carrinho.lacup.push(Lacup.value);
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
      Lacup,
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
        <span id="textDividers">Lacup</span>
        <hr />
      </div>
      <div v-for="(item, index) in Lacup.tipos" :key="item">
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
