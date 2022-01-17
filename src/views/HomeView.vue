<template>
  <div>
    <Navbar />
    <div id="hero">
      <div class="container">
        <div class="info">
          <h1>Controla tu maquinaria en tiempo real</h1>
          <p>Monitorea y gestiona desde cualquier lugar</p>
        </div>
      </div>
    </div>

    <div id="ola">
      <div class="container">
        <div class="info">
          <h1>Controla tu maquinaria en tiempo real</h1>
          <p>Monitorea y gestiona desde cualquier lugar</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
  },
  data() {
    return {};
  },
};
</script>

<style>
@media screen and (min-width: 1503px) {
  #hero {
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-image: url(../assets/image.png);
    background-color: "#6b6b6b";
    background-position: center;
    position: relative;
  }
  #ola {
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-image: url(../assets/tractor.jpg);
    background-color: "#6b6b6b";
    background-position: center;
    position: relative;
  }
  .container {
    width: 40%;
    height: 100vh;
    background: rgba(86, 86, 86, 0.3);
    backdrop-filter: blur(10px);
    position: absolute;
    left: 0;
    top: 0;
  }
  .info {
    width: 80%;
    color: #fff;
    position: absolute;
    right: 0;
    left: 0;
    padding-left: 88px;
    top: 50%;
    transform: translateY(-50%);
  }
  .info h1 {
    font-size: 60px;
    letter-spacing: 8px;
  }
  .info p {
    color: #f0eef1;
    font-size: 25px;
    margin: 20px 0;
    line-height: 18px;
  }
}

@media screen and (max-width: 1502px) {
  #hero {
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-image: url(asset/image.png);
    background-position: center;
    position: relative;
  }
  #ola {
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-image: url(asset/tractor.jpg);
    background-position: center;
    position: relative;
  }
  .container {
    width: 35%;
    height: 100vh;
    background: rgba(86, 86, 86, 0.3);
    backdrop-filter: blur(10px);
    position: absolute;
    left: 0;
    top: 0;
  }
  .info {
    width: 80%;
    color: #fff;
    position: absolute;
    right: 0;
    left: 0;
    padding-left: 40px;
    top: 50%;
    transform: translateY(-50%);
  }
  .info h1 {
    font-size: 45px;
    letter-spacing: 6px;
  }
  .info p {
    color: #f0eef1;
    font-size: 20px;
    margin: 20px 0;
    line-height: 18px;
  }
}

@media screen and (max-width: 1053px) {
  .info h1 {
    font-size: 35px;
    letter-spacing: 3px;
  }
  .info p {
    color: #f0eef1;
    font-size: 20px;
    margin: 20px 0;
    line-height: 18px;
  }
}

@media screen and (max-width: 844px) {
  .info h1 {
    font-size: 30px;
  }
  .info p {
    color: #f0eef1;
    font-size: 20px;
    margin: 20px 0;
    line-height: 18px;
  }
}

@media screen and (max-width: 750px) {
  #hero {
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-image: url(asset/image.png);
    background-position: center;
    position: relative;
  }
  #ola {
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-image: url(asset/tractor.jpg);
    background-position: center;
    position: relative;
  }
  .container {
    width: 100vw;
    height: 20vh;
    transform: translateY(400%);
    background: rgba(86, 86, 86, 0.726);
    backdrop-filter: blur(0.3px);
    position: absolute;
    left: 0;
  }
  .info {
    width: 97%;
    height: 15vh;
    color: #fff;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    padding-left: 10px;
  }
  .info h1 {
    font-size: 30px;
    letter-spacing: 3px;
  }
  .info p {
    color: #f0eef1;
    font-size: 20px;
    margin: 20px 0;
    line-height: 18px;
  }
}

@media screen and (max-width: 392px) {
  #hero {
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-image: url(asset/image.png);
    background-position: center;
    position: relative;
  }
  #ola {
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-image: url(asset/tractor.jpg);
    background-position: center;
    position: relative;
  }
  .container {
    width: 100vw;
    height: 30vh;
    transform: translateY(235%);
    background: rgba(86, 86, 86, 0.726);
    backdrop-filter: blur(0.3px);
    position: absolute;
    left: 0;
  }
  .info {
    width: 97%;
    height: 15vh;
    color: #fff;
    position: absolute;
    right: 0;
    left: 0;
    top: 52px;
    padding-left: 10px;
  }
  .info h1 {
    font-size: 25px;
    letter-spacing: 3px;
  }
  .info p {
    color: #f0eef1;
    font-size: 20px;
    margin: 20px 0;
    line-height: 18px;
  }
}
</style>
