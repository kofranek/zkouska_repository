<script setup>
import examples from '../data.json'
</script>

<template>
    <h1>Ukázky výukových simulátorů metabolismu železa</h1>
    <div v-for="example in examples" :key="example.id">
        <a :href="example.html" target="_blank">
            {{ example.title }}
        </a>
    </div>
</template>