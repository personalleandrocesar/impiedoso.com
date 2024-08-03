<script setup>

const icons = [
    {
        title: "Exercícios nas lesões de Joelho",
        description: "Já vimos que lesões do Ligamento Cruzado Anterior (LCA) são muito comuns!",
        path: "/artigos/lesoes/exercicios-lesoes-joelho",
        date: "19 de julho de 2023",
    },
    {
        title: "A importância do IMC",
        description: "É uma medida internacional usada para calcular se uma pessoa está no peso ideal.",
        path: "/artigos/saude/a-importancia-do-imc",
        date: "15 de julho de 2023",
    },
]

</script>
<template>
    <div id="space">
        <div class="articles" v-for="itens in icons">
            <div class="linear">
                <NuxtLink :to="itens.path">
                    <code>
                                {{ itens.date }}
                            </code>
                    <p class="title">{{ itens.title }}</p>
                    <p class="description">{{ itens.description }}</p>
                </NuxtLink>
            </div>
        </div>

    </div>
</template>

<style scoped>
#space {
    margin: 3.5rem 0;
}
.articles {
    margin: 1rem 1.5rem ;
}
.icon {
    zoom: 2.8;
    transition: all .4s linear;
}
.linear {
    margin-bottom: 3rem;
}

.linear a{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: nowrap;
}
.linear:hover a .name{
    color: #34d399;
}
.linear:hover a .icon{
    color: #34d399;
}
.linear:hover a .underline{
    border-bottom: dashed 1px #718096;
}
.title {
    margin:0 0;
    transition: all .4s linear;
}
.description {
    margin: 0  ;
    color: var(--color-subtext);
    font-size: .8rem;
    transition: all .4s linear;
}
.underline{
    transition: all .4s linear;
    border-bottom: dashed 1px #ccc ;
    width: 100% ;
}

</style>