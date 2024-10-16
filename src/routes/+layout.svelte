<script>
	import Header from '../lib/components/layout/Header.svelte';
	import Footer from '../lib/components/layout/Footer.svelte';
	import '../tailwind.css';

	import { appConfig, init, token } from '$lib/stores/appconfig';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(async () => {
		await init();

		
		let url = new URL(window.location.href);
		let params = url.searchParams;
		let code = params.get('code');
		if (code) {
			let verifier = localStorage.getItem('codeVerifier');
			let data = {
				grant_type: 'authorization_code',
				code: code,
				client_id: 'dadd7391-5f70-41a9-918b-c543080c26df',
				redirect_uri: 'https://divportal.ipk-gatersleben.de/',
				code_verifier: verifier
			};
			let res = await fetch(`https://login.aai.lifescience-ri.eu/oidc/token`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				// @ts-ignore
				body: new URLSearchParams(data)
			});

			if (!res.ok) {
				throw new Error('Network response was not ok');
			}

			let resData = await res.json();
			$token = resData.access_token;
			localStorage.setItem('token', $token);
			// remove searchParams from URL
			window.history.replaceState({}, document.title, window.location.pathname);

			// axios.defaults.headers.common['Authorization'] = 'Bearer ' + $token;
		}


		let publicPages = ['/', '/aai/login', '/about', '/contact'];
		let authRequired = !publicPages.includes(window.location.pathname);

		if (!$token) {
			let tmp = localStorage.getItem('token');
			if (tmp) {
				$token = tmp;
			}
		}

		const response = await fetch(`https://login.aai.lifescience-ri.eu/oidc/userinfo`, {
			headers: {
				'Authorization': `Bearer ${$token}`
			}
		});

		if (!response.ok) {
			$token = '';
			localStorage.setItem('token', '');
			goto('/');
		}


		if (authRequired) {
			if (!$token) {
				window.history.pushState(null, document.title, window.location.pathname);
				goto('/');
			}
		}
	});	
</script>

<svelte:head>
	<title>{$appConfig.crop} DivPortal</title>
	<meta name="description" content="Phenotyping Portal for exploration of observation data." />
</svelte:head>

<div class="app flex flex-col min-h-screen">
	<Header />

	<main class="flex-grow">
		<slot />
	</main>

	<Footer />
</div>
