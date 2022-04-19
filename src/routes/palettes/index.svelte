<script lang="ts">
	import { shadeColor } from '$lib/scritps/shade';

	let palettes = [];
	let newColor: string;

	async function gen() {
		let p = prompt('Gimme a hex color');

		if (p) {
			const req = await fetch('/palettes/gen', {
				method: 'POST',
				body: JSON.stringify({ color: p }),
				headers: {
					'content-type': 'application/json'
				}
			});

			const res = await req.json();
			console.log(res);
		}
	}

	function addColor() {
		let newPalette: { value: string; label: string }[] = [];

		for (let i = 3; i > 0; i--) {
			const value = shadeColor(newColor, i * 15);
			const label = 'var(--pri-100)';
			newPalette = [...newPalette, { value, label }];
		}

		const value = newColor;
		const label = 'var(--pri-100)';
		newPalette = [...newPalette, { value, label }];

		for (let i = 0; i < 3; i++) {
			const value = shadeColor(newColor, (i + 1) * -25);
			const label = 'var(--pri-100)';
			newPalette = [...newPalette, { value, label }];
		}

		palettes = [...palettes, newPalette];
	}
</script>

<div class="wrapper col xfill">
	<div class="row jbetween acenter xfill">
		<h2>Palettes</h2>
		<label for="inputColor">
			<div class="btn">NEW PALETTE</div>
		</label>
		<input type="color" id="inputColor" bind:value={newColor} on:change={addColor} />
	</div>

	<ul class="row">
		{#each palettes as p}
			<li>
				<ul>
					{#each p as { value, label }, i}
						{#if i === 0}
							<h3>{value}</h3>
						{/if}

						<li class="card col">
							<div class="color row" style="width: 150px; height: 50px; background: {value}" />
							<p>{label}</p>
						</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.wrapper {
		position: relative;
		max-width: 900px;
		margin: 0 auto;
		padding: 40px 20px;
	}

	.btn {
		font-size: 12px;
		border: 2px solid $black;
	}

	input {
		position: absolute;
		right: 0;
		transform: translateX(-100%);
		opacity: 0;
		pointer-events: none;
	}
</style>
