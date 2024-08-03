<script setup>

const icons = [
    {
        name: "Instagram",
        path: "https://www.instagram.com/personalleandrocesar",
        icon: "teenyicons:instagram-solid",
    },
    {
        name: "Threads",
        path: "https://www.threads.net/personalleandrocesar",
        icon: "fa6-brands:square-threads",
    },
    {
        name: "GitHub",
        path: "https://github.com/personalleandrocesar",
        icon: "fa6-brands:square-github",
    },
    {
        name: "WhatsApp",
        path: "https://api.whatsapp.com/send?phone=5521936184024%20&text=Ol%C3%A1%20Leandro%20Cesar,%20fiquei%20interessado(a)%20,%20em%20um%20dos%20seus%20projetos,%20me%20chamo%20",
        icon: "streamline:whatsapp-solid",
    },
]

</script>
<template>
     
    <div id="space" >

        <h3>
            Encontre-me no
        </h3>
        <div class="social" v-for="itens in icons">
            <div class="linear">
                <NuxtLink :to="itens.path">
                <p class="name">{{ itens.name }}</p>
                <p class="underline"></p>
                    <Icon :name="itens.icon" />
                </NuxtLink>
            </div>
        </div>
        
    </div>

</template>

<style scoped>
#space {
    margin-bottom: 5.5rem;
}
.social {
    margin: 0 1.5rem ;
}
.icon {
    zoom: 1.5;
    transition: all .4s linear;
}

.linear a{
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
}
.linear:hover a .name{
    color: #FF0000;
}
.linear:hover a .icon{
    color: #FF0000;
}
.linear:hover a .underline{
    border-bottom: dashed 1px #718096;
}
.name {
    margin: 0;
    transition: all .4s linear;
}
.underline{
    transition: all .4s linear;
    border-bottom: dashed 1px #ccc ;
    width: 100% ;
}

</style>