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

    const ShakesProteicos = ref({
      tipos: [
        {
          nome: "Banachi",
          preco: 11.0,
          quantidade: 0,
          descricao:
            "Shake de banana, morango e chia. Fonte de fibras, potássio e ômega-3 vegetal.",
        },
        {
          nome: "Pitaya Fresh",
          preco: 12.99,
          quantidade: 0,
          descricao:
            "Pitaya, banana com leite desnatado. Rico em antioxidantes e fibras.",
        },
        {
          nome: "Açaí Energy Plus",
          preco: 13.99,
          quantidade: 0,
          descricao:
            "Açaí zero com banana e leite. Fonte natural de energia, antioxidantes e sabor intenso.",
        },
      ],
    });

    function salvarPedido() {
      carrinho.shakesProteicos.push(ShakesProteicos.value);
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
      ShakesProteicos,
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
        <span id="textDividers">Shakes Proteicos</span>
        <hr />
      </div>
      <div v-for="(item, index) in ShakesProteicos.tipos" :key="item">
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
