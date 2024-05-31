<script>
	import { selection, steps } from '$lib/stores/divbrowse';
	import { Save } from 'carbon-icons-svelte';
	import { onMount } from 'svelte';
	import Modal from './basic/Modal.svelte';
	import Frame from './modals/Frame.svelte';
	import { api, updateCreds } from '$lib/stores/apiconfig';
	import { list } from '$lib/stores/listupload';

	/**
	 * @type {{id: string}[]}
	 */
	export let samples = [];

	/**
	 * @type {any}
	 */
	let customListModal;

	/**
	 * @param {string[]} selectedSamples
	 */
	async function samplesSelected(selectedSamples) {
		await updateCreds();

		const response = await fetch(`/divbrowse`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ 
				samples: selectedSamples,
				server: $api.base_url,
				authorization: $api.basic_auth ? $api.basic_auth : '' 
			})
		});
		const data = await response.json();
		$selection = data;
	}

	async function createList() {
		$list.data = $selection;

		const col = {
			listName: $list.name,
			listDescription: $list.description,
			listColor: $list.color,
			data: $list.data
		};

		$list = {
			name: '',
			description: '',
			color: '',
			data: []
		};

		const response = await fetch('/lists', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(col)
		});
	}

	let browser;
	onMount(async () => {
		// @ts-ignore
		browser = await divbrowse.startApp('divbrowse', {
			apiBaseUrl: 'https://divbrowse.ipk-gatersleben.de/shape_core1000_and_cultivars',
			samplesSelectedCallback: samplesSelected
		});
		browser.setSamples(samples);
		customListModal = document.getElementById('my_modal_1');
	});
</script>

<div class="relative w-full">
	<div id="divbrowse" />
	<div class="absolute flex justify-between transform -translate-y-0 right-5 top-3">
		<button 
			disabled={$selection.length===0}
			class="btn btn-sm rounded-none bg-neutral-200 text-black hover:bg-neutral-200 shadow-md"
			on:click={() => customListModal && customListModal.showModal()}
		>
			Save Selection
		</button>
	</div>	
</div>


<Modal id="my_modal_1" title="DivBrowse List">
	<Frame
		{steps}
		on:finish={() => {
			customListModal.close();
			createList();
		}}
	/>
</Modal>