<script setup lang="ts"></script>

<template>
	<div id="nav">
		<router-link to="/home">Home</router-link> |
		<router-link to="/todos">Todo</router-link> |
	</div>
	<router-view />
</template>
