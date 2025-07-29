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

    const DetoxVerdeAntioxidante = ref({
      tipos: [
        {
          nome: "DETOX TROPICAL",
          preco: 8.0,
          quantidade: 0,
          descricao:
            "Abacaxi, couve, maçã verde, limão e gengibre. Limpa, desincha e revitaliza com sabor equilibrado e frescor natural.",
        },
        {
          nome: "DETOX IMUNO+",
          preco: 8.0,
          quantidade: 0,
          descricao:
            "Laranja, acerola e hortelã. Refresca, fortalece a imunidade e ajuda a combater o cansaço. Rico em vitamina C com um toque digestivo e natural.",
        },
        {
          nome: "DETOX ACTIVE RAIZ",
          preco: 9.0,
          quantidade: 0,
          descricao:
            "Cenoura, beterraba, gengibre, couve e limão. Detox potente com raízes e folhas. Aumenta a disposição, fortalece a imunidade e limpa de dentro pra fora.",
        },
      ],
    });

    function salvarPedido() {
      carrinho.detoxVerdeAntioxidante.push(DetoxVerdeAntioxidante.value);
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
      DetoxVerdeAntioxidante,
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
        <span id="textDividers">Detox, Verde e Antioxidante</span>
        <hr />
      </div>
      <div v-for="(item, index) in DetoxVerdeAntioxidante.tipos" :key="item">
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
