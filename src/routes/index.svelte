<script lang="ts">
	import type { welcomeType } from '$lib/types';
	export let data: welcomeType;

	const { title, message } = data;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="wrapper row jcenter xfill">
	<h1>{message}</h1>
</div>

<style lang="scss">
	.wrapper {
		padding: 15% 40px;
	}
</style>
