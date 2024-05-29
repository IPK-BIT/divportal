<script>
	export let options;
	export let value;
	export let param;
</script>

<div class="space-x-2">
	<label for="includeOutliers" class="block text-sm font-medium">{param.label}</label>
	{#each options as option}
		<input
			type="radio"
			id="{param.short}-{option.value}"
			name={param.short}
			value={option.value}
			class="mr-2"
			bind:group={value}
			on:change
		/>
		<label for="{param.short}-{option.value}" class="inline-block">{option.label}</label>
	{/each}
</div>
