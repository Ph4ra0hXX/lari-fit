<script setup>
const props = defineProps(["data"]);

function deveExibir(item) {
  const hoje = new Date().toLocaleDateString("pt-BR", { weekday: "long" });

  console.log(hoje);
  return item.diasSemana.includes(hoje);
}
</script>

<template>
  <div class="container" v-if="deveExibir(data)">
    <router-link :to="data.url">
      <div class="grid">
        <article class="card">
          <img class="card__image vert-move" :src="data.img" />

          <div class="card__data">
            <div class="card__info">
              <h2>{{ data.nome }}</h2>
              <p>{{ data.descricao }}</p>
            </div>
            <h3 class="card__price"></h3>

            <button class="card__add">+</button>
          </div>
        </article>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
#dividers {
  height: 18px;
  margin-bottom: 12px;
}

h2,
h3,
p {
  margin: 0;
}

.container {
  max-width: 375px;
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template: 1fr / repeat(0, 1fr);
}

.card {
  width: 180px;
  margin: 55px auto;
}

.card__image {
  position: absolute;
  width: 270px;
  left: 0px;
  right: 0;
  margin: 0 auto;
  /* top: -18%; */
  z-index: 2;
  transition: all 0.3s ease-out;
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.3));
  margin-top: -40px;
  border-radius: 30px;
}

.card__data {
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: #6f966a;
  padding-top: calc(100% * 1.18);
  transition: all 0.3s ease-out 0.1s;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.card__info {
  text-align: center;
  padding: 0 10px;
  margin-bottom: 10px;
}

.card__info h2 {
  font-size: 16px;
  font-family: Barlow-Black;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 2px;
}

.card__info p {
  margin-top: 5px;
  font-family: Barlow-SemiBold;
  font-size: 15px;
  line-height: 16px;
  color: #0e0e0e;
}

.card__action {
  display: grid;
  grid-template: 30px / 1fr 35px;
}

.card__price {
  padding: 0 20px 0 30px;
  font-size: 14px;
  display: flex;
  align-items: center;
  font-weight: 800;

  font-family: Barlow-Black;
}

.card__add {
  width: 140px;
  height: 30px;
  background-color: #141414;
  border: none;
  color: #fff;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in;
  margin-bottom: 10px;
}

@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

img.vert-move {
  -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;
}

img.vert-move {
  -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;
}

@-webkit-keyframes mover {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-10px);
  }
}

@keyframes mover {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-10px);
  }
}
</style>
