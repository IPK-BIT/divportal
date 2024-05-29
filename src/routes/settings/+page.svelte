<script>
	import { api, updateCreds } from '$lib/stores/apiconfig';
	import { appConfig } from '$lib/stores/appconfig';
	import { Locked, Save } from 'carbon-icons-svelte';
	import { onMount } from 'svelte';
	let activeTab = 0;
	let method = 'noauth';
	let authInfo = {
		basic: {
			username: '',
			password: ''
		}
		// 'bearer': ''
	};

	let selectedTheme;

	let themes = [
		{
			name: 'IPK Bright',
			value: 'ipk'
		},
		{
			name: 'IPK Dark',
			value: 'ipkdark'
		},
		{
			name: 'BrAPI',
			value: 'brapi'
		},
		// {
		// 	name: 'Germinate',
		// 	value: 'germinate'
		// },
		{
			name: 'Lemonade',
			value: 'lemonade'
		},
		{
			name: 'Forest',
			value: 'forest'
		},
		{
			name: 'Coffee',
			value: 'coffee'
		}
	];

	onMount(async () => {
		loadAuthDetails();
		selectedTheme = localStorage.getItem('theme') || $appConfig.theme;
	});

	async function loadAuthDetails() {
		const response = await fetch(`/settings/auth?server=${$api.base_url}`);
		const data = await response.json();
		if (data) {
			const details = data.find(
				(/** @type {{ server: string; }} */ d) => d.server === $api.base_url
			);
			if (details) {
				method = details.method;
				if (details.method === 'basic') {
					authInfo = {
						basic: details.details
					};
				}
				updateCreds();
			} else {
				method = 'noauth';
				authInfo = {
					basic: {
						username: '',
						password: ''
					}
				};
			}
		}
	}

	async function persistAuthDetails() {
		await fetch('/settings/auth', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				server: $api.base_url,
				method: method,
				// @ts-ignore
				authInfo: authInfo[method]
			})
		});
	}
</script>

<section class="p-4 space-y-2">
	<h1 class="text-xl">Settings</h1>
	<div role="tablist" class="tabs tabs-lifted">
		<button
			role="tab"
			class="tab {activeTab === 0
				? 'tab-active  [--tab-bg:oklch(var(--n))] text-[oklch(var(--nc))]'
				: ''}"
			on:click={() => (activeTab = 0)}>General</button
		>
		<button
			role="tab"
			class="tab {activeTab === 1
				? 'tab-active  [--tab-bg:oklch(var(--n))] text-[oklch(var(--nc))]'
				: ''}"
			on:click={() => (activeTab = 1)}><Locked /> BrAPI</button
		>
		<button
			role="tab"
			class="tab {activeTab === 2
				? 'tab-active  [--tab-bg:oklch(var(--n))] text-[oklch(var(--nc))]'
				: ''}"
			on:click={() => (activeTab = 2)}><Locked /> Features</button
		>
	</div>
	<div class="overflow-x-auto">
		<table class="table">
			{#if activeTab === 0}
				<tbody>
					<tr>
						<td>Theme</td>
						<td>
							{#each themes as theme}
								<div class="form-control">
									<label class="label cursor-pointer gap-4">
										<span class="label-text">{theme.name}</span>
										<input
											bind:group={selectedTheme}
											type="radio"
											name="theme-radios"
											class="radio theme-controller"
											value={theme.value}
											on:change={() => {
												document.documentElement.setAttribute('data-theme', theme.value);
												localStorage.setItem('theme', theme.value);
											}}
										/>
									</label>
								</div>
							{/each}
						</td>
					</tr>
				</tbody>
			{:else if activeTab === 1}
				<tbody>
					<tr>
						<td>BrAPI Server</td>
						<td>
							{#each $appConfig.servers as server}
								<div class="form-control">
									<label class="label cursor-pointer">
										<span class="label-text">{server.name}</span>
										<input
											class="radio"
											type="radio"
											bind:group={$api.base_url}
											value={server.url}
											on:change={loadAuthDetails}
										/>
									</label>
								</div>
							{/each}
						</td>
					</tr>
					<tr>
						<td>Authorization</td>
						<td>
							<div class="form-control">
								<div class="flex flex-row justify-between">
									<select class="select select-bordered select-sm" bind:value={method}>
										<option value="noauth">No Authorization</option>
										<option value="basic">Basic Auth</option>
										<!-- <option value="bearer">Bearer</option> -->
									</select>
									<div class="w-1/3">
										{#if method === 'noauth'}
											<p>No authorization header</p>
										{:else if method === 'basic'}
											<input
												type="password"
												class="input input-bordered input-sm"
												placeholder="Username"
												bind:value={authInfo.basic.username}
											/>
											<input
												type="password"
												class="input input-bordered input-sm"
												placeholder="Password"
												bind:value={authInfo.basic.password}
											/>
											<!-- {:else if method === 'bearer'}
											<input class="input input-bordered input-sm" placeholder="Bearer Token" bind:value={authInfo.bearer} /> -->
										{/if}
									</div>
									<button class="btn hover:btn-success btn-sm" on:click={persistAuthDetails}
										><Save /> Persist</button
									>
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			{:else if activeTab === 2}
				<tbody>
					<tr>
						<td>Feature 1</td>
						<td><input type="checkbox" class="toggle" checked /></td>
					</tr>
					<tr>
						<td>Feature 2</td>
						<td><input type="checkbox" class="toggle" /></td>
					</tr>
					<tr>
						<td>Feature 3</td>
						<td><input type="checkbox" class="toggle" checked /></td>
					</tr>
				</tbody>
			{/if}
		</table>
	</div>
</section>
