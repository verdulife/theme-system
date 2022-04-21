<script lang="ts">
	let styles: string = `
    --global-padding: 40px;

    width: calc(100% - (var(--global-padding) * 2));
    max-width: 300px;
    background-color: black;
    color: white;
    border-radius: 1em;
    font-size: 1em;
    padding: 1em calc(1em * 1.618);
  `;
</script>

<div class="row fill">
	<div class="preview col fcenter xhalf yfill">
		<button style={styles}>Lorem ipsum</button>
	</div>
	<div class="styles col fcenter xhalf yfill">
		<textarea class="fill" bind:value={styles} />
	</div>
</div>

<style lang="scss">
	textarea {
		font-family: 'Operator Mono Lig', Courier, monospace;
		background: #000;
		color: #fff;
		padding: 100px;
	}
</style>
