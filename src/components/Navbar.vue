<template>
  <div class="navbar">
    <img src="../assets/logo.png" alt="" class="logo" srcset="" />
    <div class="user">
      <button type="button" class="buttonNavbar">Contacto</button>
      <button type="button" class="buttonNavbar">Acceso Clientes</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.navbar {
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 10;
}
.navbar .logo {
  width: 60px;
  margin: 30px 0;
  cursor: pointer;
}
.user {
  display: flex;
  align-items: center;
}
.buttonNavbar {
  padding: 8px 25px;
  margin: 12px;
  background: rgba(86, 86, 86, 0.3);
  backdrop-filter: blur(10px);
  outline: none;
  border: 2px solid rgb(105, 99, 99);
  border-radius: 20px;
  color: rgb(255, 255, 255);
  font-size: 19px;
  font-weight: bold;
  cursor: pointer;
}

@media screen and (max-width: 410px) {
  .buttonNavbar {
    padding: 6px 10px;
    margin: 6px;
    background: rgba(86, 86, 86, 0.3);
    backdrop-filter: blur(10px);
    outline: none;
    border: 2px solid rgb(105, 99, 99);
    border-radius: 10px;
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
}
</style>