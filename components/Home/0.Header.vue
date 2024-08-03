<script setup>
const photoOpen = ref(false);
function openPhoto() {
    photoOpen.value = !photoOpen.value;
}

const plus = ref(true)
const headPlus = () => {
    plus.value = !plus.value
}

</script>
<template>

    <div class='logo'>
        <img @click="openPhoto()" src="~/assets/perfil.jpeg" alt="Foto de perfil do Personal Leandro Cesar.">
        
    </div>
    <div v-if="photoOpen" class="nav-bar">
        <div class='logo-nav-bar'>
            <img @click="openPhoto" src="~/assets/perfil.jpeg" alt="Foto de perfil do Personal Leandro Cesar.">
        </div>
    </div>

    <div class="head-hello">
        <div class="hello">
            IMPIEDOSO
        </div>
        <p>
            Depois de falarem que meu treino é fraco... entrei num modo totalmente obscuro, que
            hoje em dia não tenho piedade de ninguém!!
        </p>
        <!-- <div class="plus">
            <div v-if="plus" @click="headPlus()">mais
                <Icon name="material-symbols-light:keyboard-arrow-down-rounded" />
            </div>
            <div v-else @click="headPlus()">menos
                <Icon name="material-symbols-light:keyboard-arrow-up-rounded" />
            </div>
    </div> -->

    </div>

</template>
<style scoped>
.logo {
    display: flex;
    justify-content: center;
    flex-direction: flex-start;
    align-items: center;
    flex-wrap: wrap;
    height: 55px;
    width: 55px;
    margin: 3rem 1.5rem 1.5rem 1.5rem ;
    background:  linear-gradient(to bottom right, #FF0000 0%,#FF000070 50%,#333 100%);
    border-radius: 7px;
}

.logo img {
    height: 50px;
    width: 50px;
    border-radius: 7px;
    opacity: 1;
    
}

.nav-bar {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    position: fixed;
    bottom: 0px;
    transform: translateX(0%);
    height: calc(100% - 0px);
    width: 100%;
    z-index: 1004;
}
.logo-nav-bar {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    transform: translateX(0%);
    position: fixed;
    bottom: 0px;
    height: calc(100% - 0px);
    width: 100%;
    background:  linear-gradient(to bottom right, #FF0000 0%,#FF000080 50%,#333 100%);
    backdrop-filter: blur(5px);
    z-index: 1004;
    
}
.logo-nav-bar img {
    height: 300px;
    width: 300px;
    border-radius: 7px;
    border: #FF0000 1px solid;
    opacity: 1;
    z-index: 100;
    
}

.button-client .icon{
    margin-top: -5px;
    margin-right: 5px;
    transition: all 0.2s ease-in-out 0s;
}
.button-client:hover .icon{
    color: #095D6280;
}
.head-hello {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 5.5rem;
    color: #ff0000;
    text-shadow: 2px 2px 2px #444;
}


.hello {
    font-size: 1.6rem;
    margin: .2rem 1.5rem;
    line-height: 1.5rem;
    font-weight: 700;
    letter-spacing: 1.5px;
}   

.plus{
    margin-right: 1rem;
        cursor: pointer;
}

</style>