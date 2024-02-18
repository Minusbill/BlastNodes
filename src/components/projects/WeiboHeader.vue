<script>
export default {
	props: ['singleProjectHeader'],
};
</script>

<template>
	<div>
		<!-- Project heading and meta info -->
		<p
			class="font-general-medium text-mid font-bold text-primary-dark dark:text-primary-light"
		>
			{{ singleProjectHeader.singleProjectTitle }}
		</p>

	</div>
</template>
