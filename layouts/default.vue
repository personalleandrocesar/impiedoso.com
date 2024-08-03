<script>
export default {
  mounted() {
    let lastScrollTop = 0;
    const navbar = document.getElementById('nav-container');

    window.addEventListener('scroll', function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Rolando para baixo
        navbar.style.top = '-100px'; // Ou qualquer outra posição desejada para esconder o navbar
      } else {
        // Rolando para cima
        navbar.style.top = '10px';
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para o comportamento correto em bordas
    }, false);
  }
}


</script>
<script setup>
const colorMode = useColorMode()

function theme() {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
} 

const colorCookie = useCookie('colorCookie')
if (colorMode.value === "dark") {
  colorCookie.value = "darkCookie"  
} else {
 colorCookie.value = "lightCookie"
}
colorCookie.value === "darkCookie" ? colorMode.value = "dark" : colorMode.value ="light"
</script>
<template>
  <div id="nav-container" class='nav'>

    <div>
      <NuxtLink to="/">
        <Icon name="solar:home-smile-bold" />
      </NuxtLink>
      <NuxtLink to="/projetos">
        <Icon name="solar:folder-with-files-bold" />
      </NuxtLink>
      <NuxtLink to="/projetos">
        <Icon name="solar:dumbbell-large-bold" />
      </NuxtLink>
      <NuxtLink to="/artigos">
        <Icon name="solar:document-add-bold" />
      </NuxtLink>
      <!-- <NuxtLink to="/artigos">
        <Icon name="solar:document-add-outline" />
      </NuxtLink>
      <NuxtLink to="/labs">
        <Icon name="heroicons:beaker" />
      </NuxtLink>
      <NuxtLink to="/bolsa">
        <Icon name="solar:backpack-outline" />
      </NuxtLink>
      <NuxtLink to="/favoritos">
        <Icon name="solar:bookmark-square-minimalistic-outline" />
      </NuxtLink> -->
    </div>
    <div>
      <a href="https://app.leandrocesar.com">
        <Icon name="solar:login-3-bold" />
      </a>
    </div>
    
    
  </div>
  <slot />
</template>
<style scoped>

.whats .icon {
  color: #FF000090;
}


.nav {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  transition: all .4s linear;
  position: sticky;
  top: 10px;
  margin: 16px auto;
  box-shadow: 0 0px 5px #00f2ff10;
  border: solid 1px #FF0000;
  width: 90%;
  height: 50px;
  border-radius: 50px;
  z-index: 101;
  backdrop-filter: blur(100px)
}
.nav a {
  margin: 0 5px;
  padding: 10px;
  padding: 6px 6px 9px 6px;
  text-decoration: none;
  cursor: pointer;
}

.nav a.router-link-exact-active {
  margin: 0 5px;
  padding: 6px 6px 9px 6px;
  color: #FF0000;
  background: linear-gradient(to bottom right, #FF000010 0%,#FF000010 50%,#FF000010 100%);

  border-radius: 9px;
  text-decoration: none;
  cursor: pointer;
}

.nav a.router-link-exact-active:hover {
  margin: 0 5px;
  padding: 6px 6px 9px 6px;
  color: #FF0000;
  background: linear-gradient(to bottom right, #FF000010 0%,#FF000010 50%,#FF000010 100%);
  color: #FF0000;
  border-radius: 9px;
  text-decoration: none;
  cursor: pointer;
}

.nav a.router-link-exact-active:hover::after {
  position: absolute;
  top: 60px;
  left: 20px;
  padding: 3px 8px;
  background-color: var(--color-background);
  color: #FF0000;
  border-radius: 9px;
  text-decoration: none;
  cursor: pointer;
}

.nav a:hover {
  background-color: transparent;
  color: #FF0000;
}

.whats {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  height: 35px;
  width: 35px;
  transition: all 0.2s ease-in-out 0s;
  bottom: 3.5rem;
  right:1.5rem;
  border-radius: 9px;
  cursor: pointer;
  z-index: 100;
  border: solid 1px #FF000010;
  box-shadow: 0 0px 5px #FF000040;
  backdrop-filter: blur(100px)
}

/* @media (min-width: 800px) {
  .whats   {
    position: fixed;
    bottom: 6rem;
    right: 20%;
  }
} */

</style>
