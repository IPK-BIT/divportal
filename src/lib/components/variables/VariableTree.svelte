<script>
	/**
	 * @type {any[]}
	 */
	export let variables = [];
	/**
	 * @type {string[]}
	 */
	export let traitClasses = [];
	export let focussedItem = undefined;
</script>

<ul>
	{#each traitClasses as traitClass}
		<li>
			<details>
				<summary>
					{traitClass ? traitClass : 'undefined'}
				</summary>
				{#each variables.filter((v) => {
					return v.trait.traitClass === traitClass;
				}) as variable}
					<ul class="pl-6">
						<li class="py-1">
							<details>
								<summary>
									<button
										on:click={() => {
											focussedItem = variable.trait;
										}}
										>{variable.trait.traitName
											? variable.trait.traitName
											: variable.trait.traitDbId}</button
									>
									<div class="badge badge-primary badge-sm">Trait</div>
								</summary>
								<ul class="pl-6">
									<li class="py-1">
										<details>
											<summary>
												<button
													on:click={() => {
														focussedItem = variable.method;
													}}
													>{variable.method.methodName
														? variable.method.methodName
														: variable.method.methodDbId}</button
												>
												<div class="badge badge-secondary badge-sm">Method</div>
											</summary>
											<ul class="list-disc pl-6">
												<li class="list-item list-inside py-1">
													<button
														on:click={() => {
															focussedItem = variable.scale;
														}}
														>{variable.scale.scaleName
															? variable.scale.scaleName
															: variable.scale.scaleDbId}</button
													>
													<div class="badge badge-accent badge-sm">Scale</div>
												</li>
											</ul>
										</details>
									</li>
								</ul>
							</details>
						</li>
					</ul>
				{/each}
			</details>
		</li>
	{/each}
</ul>
