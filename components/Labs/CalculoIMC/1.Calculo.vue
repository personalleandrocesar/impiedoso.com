<script setup>
import { ref, computed } from 'vue'

const divInfoIMC = ref(false)
const peso = ref()
const altura = ref()

const calcIMC = computed(() => {
        return (peso.value / (altura.value * altura.value)).toFixed(1)    
})

const resIMC = computed(() => {
    if (peso.value > 0 & altura.value > 0) {
        return true
    } else  {
        return false
    }
})

const classIMC = computed(() => {
    if (calcIMC.value < 18.5) {
        return 'Baixo Peso';
    } else if (calcIMC.value >= 18.5 && calcIMC.value <= 24.9) {
        return 'Normal';
    } else if (calcIMC.value >= 25.0 && calcIMC.value <= 29.9) {
        return 'Sobrepeso';
    } else if (calcIMC.value >= 30 && calcIMC.value <= 34.9) {
        return 'Obesidade classe 1';
    } else if (calcIMC.value >= 35 && calcIMC.value <= 39.9) {
        return 'Obesidade classe 2';
    } else if (calcIMC.value >= 40.0) {
        return 'Obesidade classe 3';
    } else {
        return 'Digite os valores certo para saber seu IMC!!'
    }
})

const resClassIMC = classIMC.value

function infoIMC() {
    divInfoIMC.value = !divInfoIMC.value
}

</script>
<template>
    <div id="space">
        <div class="articles">
            <div class="linear">
                <label for="peso">Qual o seu peso? <br> (ex.: 80.0 kg)</label>
                <input type="text" name="peso" id="peso" v-model="peso">
            </div>
            <div class="linear">
                <label for="peso">Qual a sua altura? <br> (ex.: 1.80 m)</label>
                <input type="text" name="altura" id="altura" v-model="altura">
            </div>
        </div>
        <div class="result">
            <p v-if="resIMC" class="res">
                 <b>IMC = {{ calcIMC }} kg/m²</b>
                <br>
                <b>Classificação do IMC:<br>{{ classIMC }}</b>
                <br>
                <div @click="infoIMC()" class="info">
                    Ver tabela                
                </div>

                <div>
                        <table v-if="divInfoIMC">
                            <tr>
                                <th>
                                    Classificação
                                </th>

                                <th>

                                    IMC (kgm²)
                                </th>
                                <th>
                                    Risco de <br> Co-morbidades
                                </th>
                            </tr>
                            <tr>

                                <td>
                                    Baixo Peso
                                </td>
                                <td>
                                    &lt; 18.5
                                </td>
                                <td>
                                    Baixo
                                </td>
                            </tr>
                            <tr>

                                <td>
                                    Normal
                                </td>
                                <td>
                                    18.5 - 24.9
                                </td>
                                <td>
                                    Ausente
                                </td>
                            </tr>
                            <tr>

                                <td>
                                    Sobrepeso
                                </td>
                                <td>
                                    25.0 - 29.9
                                </td>
                                <td>
                                    Aumentado
                                </td>
                            </tr>
                            <tr>

                                <td>
                                    Obesidade classe 1
                                </td>
                                <td>
                                    30.0 - 34.9
                                </td>
                                <td>
                                    Moderado
                                </td>
                            </tr>
                            <tr>

                                <td>
                                    Obesidade classe 2
                                </td>
                                <td>
                                    35.0 - 39.9
                                </td>
                                <td>
                                    Severo
                                </td>
                            </tr>
                            <tr>

                                <td>
                                    Obesidade classe 3
                                </td>
                                <td>
                                    &ge; 40.0
                                </td>
                                <td>
                                    Muito Severo
                                </td>
                            </tr>
                        </table>                  
                </div>
            </p>
            <p class="res" v-else>
                Coloque os valores acima de maneira correta!
            </p>
        </div>

        <NuxtLink class="artigo" to="/artigos/saude/a-importancia-do-imc">Artigo relacionado: A importância do IMC</NuxtLink>

    </div>
</template>

<style scoped>
#space {
    margin: 3.5rem 0;
}
.articles {
    margin: 1rem 1.5rem ;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
}
.icon {
    zoom: 2.8;
    transition: all .4s linear;
}
.res {
    margin: 0 auto 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    text-align: center;
}

.info {
    border: solid .1px var(--color-subtext);
    padding: 2px 12px;
    font-size: .8rem;
    cursor: pointer;
}
.info:hover {
    border: dashed 1px #34d399;
}
.artigo {
    border: solid .1px var(--color-subtext);
    padding: 2px 12px;
    font-size: .8rem;
    cursor: pointer;
    margin: 0 1.5rem;
}
.artigo:hover {
    border: dashed 1px #34d399;
}
.linear {
    margin: 0 auto 2rem auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
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

table {
    margin: 10px  ;
}

.result {
    margin: 0 auto 2rem auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
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

input {
    border-radius: 4px;
    border: solid .1px var(--color-subtext);
    max-width:  80px;
    text-align: center;
}

label {
    text-align: center;
}

</style>