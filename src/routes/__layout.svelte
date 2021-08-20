<script lang="ts">
	import { silentRefresh } from "$lib/stores/refresh-store";

	import { session } from '$app/stores';
	import { onMount } from 'svelte';

	onMount(() => {
        $session.user = 'test';
        if ($session.user) {
            silentRefresh.start();
        }
    })
</script>

<slot />
