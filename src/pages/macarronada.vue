<script>
import { ref, watch, onUpdated } from "vue";
import { carrinhoStore } from "../store/produtos";
import { useToast } from "vue-toastification";
import router from "../router/index";

export default {
  setup() {
    const toast = useToast();

    const carrinho = carrinhoStore();

    const Burger = ref({
      Pao: [
        {
          nome: "Isca de Frango Empanado",
          preco: 27.0,
          quantidade: 0,
          descricao: "Isca de frango empanado servida com molho.",
        },
        {
          nome: "Mini Pastéis de Carne Com Molho Rosé",
          preco: 24.0,
          quantidade: 0,
          descricao: "Mini pastéis de carne acompanhados de molho rosé.",
        },
        {
          nome: "Mini Pastéis de Queijo Com Geléia de Pimenta",
          preco: 22.0,
          quantidade: 0,
          descricao:
            "Mini pastéis de queijo acompanhados de geléia de pimenta.",
        },
        {
          nome: "Batata Frita Servida Com Molho Rosé",
          preco: 15.0,
          quantidade: 0,
          descricao: "Batata frita servida com molho rosé.",
        },
        {
          nome: "Dadinho de Queijo Empanado",
          preco: 20.0,
          quantidade: 0,
          descricao: "Dadinho de queijo empanado.",
        },
        {
          nome: "Batata Frita Especial",
          preco: 22.0,
          quantidade: 0,
          descricao: "Batata frita com bacon, cheddar e queijo.",
        },
        {
          nome: "Linguiça Artesanal Cuiabana Suína",
          preco: 27.0,
          quantidade: 0,
          descricao: "Linguiça artesanal cuiabana suína.",
        },
        {
          nome: "Linguiça Artesanal Picante",
          preco: 27.0,
          quantidade: 0,
          descricao: "Linguiça artesanal picante.",
        },
        {
          nome: "Linguiça Artesanal Sertaneja",
          preco: 27.0,
          quantidade: 0,
          descricao: "Linguiça artesanal sertaneja.",
        },
        {
          nome: "Feijão Verde Cremoso",
          preco: 24.9,
          quantidade: 0,
          descricao: "Feijão verde cremoso.",
        },
        {
          nome: "Pão de Alho",
          preco: 7.0,
          quantidade: 0,
          descricao: "Pão de alho.",
        },
        {
          nome: "Isca de Tilápia Empanada",
          preco: 32.0,
          quantidade: 0,
          descricao: "Isca de tilápia empanada acompanhada de molho 3 queijos.",
        },
        {
          nome: "Salada Caesar",
          preco: 28.0,
          quantidade: 0,
          descricao:
            "Mix de folhas, cenoura ralada, croutons, manga, queijo parmesão, filé de frango, molho, mel, mostarda e gergelim.",
        },
        {
          nome: "Salada de Filé",
          preco: 30.0,
          quantidade: 0,
          descricao:
            "Mix de folhas, cenoura ralada, croutons, manga, queijo parmesão, filé, molho, mel, mostarda e gergelim.",
        },
      ],
    });

    function salvarPedido() {
      console.log(Burger.value);

      carrinho.burgers.push(Burger.value);

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

    function updateQuantities(selectedItem) {}

    return {
      Burger,
      salvarPedido,
      updateQuantities,
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
        <span id="textDividers">COMBOS</span>
        <hr />
      </div>
      <div v-for="(item, index) in Burger.Pao" :key="item">
        <button
          class="botao1"
          @click="item.quantidade++, updateQuantities(item)"
        >
          +
        </button>

        <button
          v-if="item.quantidade > 0"
          class="botao2"
          @click="item.quantidade--"
        >
          -
        </button>

        <label style="pointer-events: none" id="nomeItem" for="adicional"
          ><span id="quantidadeDiv">{{ item.quantidade }}x</span>
          {{ item.nome }}</label
        >
        <label id="preco">R$: {{ item.preco.toFixed(2) }}</label>
        <p id="itens">{{ item.descricao }}</p>
        <br />
      </div>

      <!---------------------------->

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
#observacao {
  padding: 5px;
  margin-bottom: 20px;
  height: 60px;
}

#quantidadeDiv {
  font-weight: bold;
  color: #004632;
  font-size: 20px;
}

#textDividers {
  color: #004632;
  font-family: "Barlow-Black";
  font-size: 25px;
  font-weight: lighter;
  text-transform: uppercase;
}

.dotted-line {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0;
}

.dotted-line hr {
  flex: 1;
  border: none;
  border-top: 2px dashed white;
  margin: 0 10px;
}

.dotted-line span {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.botao1 {
  background-color: #004632;
  color: #fff;
  border: none;
  padding: 5px 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  width: 35px;
  margin-right: 2px;
}

.botao2 {
  background-color: #004632;
  color: #fff;
  border: none;
  padding: 5px 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  width: 35px;
  margin-left: 2px;
}

#nomeItem {
  font-size: 20px;
  margin-left: 7px;
}

#tituloRadio {
  display: flex;
  align-items: center;
}

#tituloDoRadio {
  margin-left: 3px;
}

input[type="radio"] {
  margin-left: -3px;
  border: 0px;
  width: 30px;
  height: 2em;
  accent-color: #f27141;
}
</style>
