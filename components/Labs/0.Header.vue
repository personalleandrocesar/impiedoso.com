<script setup>

</script>
<template>
    <div id="space">

        <div class="head-hello">

            <div class="hello">
                Laboratório
            </div>
            <p class="text">
                Algumas experiências e fórmulas aleatórias que crio no meu tempo livre.
            </p>

        </div>

    </div>
</template>

<style scoped>
#space {
    margin: 3rem 0;
}

.head-hello {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
}


.hello {
    font-size: 1.6rem;
    margin: .2rem 1.5rem;
    line-height: 1.5rem;
    font-weight: 700;
    letter-spacing: 1.5px;
}

.text {
    margin: 1rem 1.5rem;
    line-height: 1.5rem;
    letter-spacing: 1.5px;
}

.articles {
    margin: 1rem 1.5rem;
}

.articles-full {
    margin: -1.5rem 1.5rem 5.5rem 1.5rem;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
}

.icon {
    zoom: 1;
    transition: all .4s linear;
}

.linear {
    margin-bottom: 3rem;

}

.linear a {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: nowrap;
}

.linear:hover a .title {
    color: #34d399;
}

.linear:hover a .icon {
    color: #34d399;
}

.linear:hover a .underline {
    border-bottom: dashed 1px #718096;
}

.title {
    margin: 0;
    transition: all .4s linear;
}

.description {
    margin: 0;
    color: var(--color-subtext);
    font-size: .8rem;
    transition: all .4s linear;
}

.underline {
    transition: all .4s linear;
    border-bottom: dashed 1px #ccc;
    width: 100%;
}
</style>