<script>
	import { steps } from '$lib/stores/listupload';
	import Modal from '$lib/components/basic/Modal.svelte';
	import Frame from '$lib/components/modals/Frame.svelte';
	import { list } from '$lib/stores/listupload';
	import { Save, TrashCan } from 'carbon-icons-svelte';
	import { onMount } from 'svelte';

	/**
	 * @type {Array<{additionalInfo: string, listDbId: string, listName: string, listDescription: string, listColor: string, listSize: number}>}
	 */
	let lists = [];

	/**
	 * @type {any}
	 */
	let customListModal;

	onMount(async () => {
		await loadLists();
		customListModal = document.getElementById('my_modal_1');
	});

	async function createList() {
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
		await response.json();
		loadLists();
	}

	async function loadLists() {
		const response = await fetch('/lists');
		lists = await response.json();
	}

	/**
	 * @param {string} id
	 */
	async function deleteList(id) {
		const response = await fetch(`/lists?listDbId=${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();
		loadLists();
	}

	/**
	 * @param {string} id
	 */
	async function updateList(id) {
		const list = lists.find((l) => l.listDbId === id);
		const response = await fetch(`/lists?listDbId=${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(list)
		});
		const data = await response.json();
		loadLists();
	}

	/**
	 * @param {string} collectionName
	 */
	async function loadPredefined(collectionName) {
		const response = await fetch('/lists', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				listName: collectionName,
				predefined: true
			})
		});
		await response.json();
		loadLists();
	}
</script>

<section class="p-4">
	<div class="flex w-full justify-end space-x-2">
		<button
			class="btn btn-secondary btn-sm"
			on:click={() => {
				loadPredefined('50_core_set');
			}}
		>
			Load core50 Collection
		</button>
		<button
			class="btn btn-secondary btn-sm"
			on:click={() => {
				loadPredefined('200_core_set');
			}}
		>
			Load core200 Collection
		</button>
		<button
			class="btn btn-primary btn-sm"
			on:click={() => customListModal && customListModal.showModal()}
		>
			Load Custom List
		</button>
	</div>

	<div>
		<table class="table">
			<thead>
				<th>List Name</th>
				<th>Description</th>
				<th>List Size</th>
				<th>List Color</th>
				<th>Actions</th>
			</thead>
			<tbody>
				{#if lists}
					{#each lists as list}
						<tr class="hover">
							<td>{list.listName}</td>
							<td>{list.listDescription}</td>
							<td>{list.listSize}</td>
							<td><input class="" type="color" bind:value={list.listColor} /></td>
							<td class="space-x-1">
								<button
									class="btn btn-sm hover:btn-warning"
									on:click={() => {
										updateList(list.listDbId);
									}}
								>
									<Save /> Update
								</button>
								<button
									class="btn btn-sm hover:btn-error"
									on:click={() => {
										deleteList(list.listDbId);
									}}
								>
									<TrashCan /> Delete
								</button>
							</td>
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
	</div>
</section>

<Modal id="my_modal_1" title="List Upload">
	<Frame
		{steps}
		on:finish={() => {
			customListModal.close();
			createList();
		}}
	/>
</Modal>
