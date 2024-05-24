<script>
	import Funding from '$lib/components/about/Funding.svelte';
	import Links from '$lib/components/about/Links.svelte';
	import Partners from '$lib/components/about/Partners.svelte';
	import ProjectDescription from '$lib/components/about/ProjectDescription.svelte';
	import ProjectOverview from '$lib/components/about/ProjectOverview.svelte';
	import Publications from '$lib/components/about/Publications.svelte';
	import Workpackages from '$lib/components/about/Workpackages.svelte';

	let activeTab = 0;
</script>

<section class="m-4 p-1 bg-base-200 rounded-md">
	<div role="tablist" class="tabs tabs-lifted">
		<button
			role="tab"
			class="tab {activeTab === 0 ? 'tab-active  [--tab-bg:#006666] text-white' : ''}"
			on:click={() => (activeTab = 0)}>Home</button
		>
		<button
			role="tab"
			class="tab {activeTab === 1 ? 'tab-active  [--tab-bg:#006666] text-white' : ''}"
			on:click={() => (activeTab = 1)}>Partners</button
		>
		<button
			role="tab"
			class="tab {activeTab === 2 ? 'tab-active  [--tab-bg:#006666] text-white' : ''}"
			on:click={() => (activeTab = 2)}>Project Overview</button
		>
		<button
			role="tab"
			class="tab {activeTab === 3 ? 'tab-active  [--tab-bg:#006666] text-white' : ''}"
			on:click={() => (activeTab = 3)}>Workpackages</button
		>
		<button
			role="tab"
			class="tab {activeTab === 4 ? 'tab-active  [--tab-bg:#006666] text-white' : ''}"
			on:click={() => (activeTab = 4)}>Publications</button
		>
		<button
			role="tab"
			class="tab {activeTab === 5 ? 'tab-active  [--tab-bg:#006666] text-white' : ''}"
			on:click={() => (activeTab = 5)}>Links</button
		>
		<button
			role="tab"
			class="tab {activeTab === 6 ? 'tab-active  [--tab-bg:#006666] text-white' : ''}"
			on:click={() => (activeTab = 6)}>Funding</button
		>
	</div>
	<div class="p-4 space-y-4">
		{#if activeTab === 0}
			<ProjectDescription />
		{:else if activeTab === 1}
			<Partners />
		{:else if activeTab === 2}
			<ProjectOverview />
		{:else if activeTab === 3}
			<Workpackages />
		{:else if activeTab === 4}
			<Publications />
		{:else if activeTab === 5}
			<Links />
		{:else if activeTab === 6}
			<Funding />
		{/if}
	</div>
</section>
