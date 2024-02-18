<script>
import feather from 'feather-icons';

export default {
	props: ['projectInfo'],

	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
		<div class="w-full sm:w-3/3 text-left mt-10 sm:mt-0">
			<p
				v-for="projectDetail in projectInfo.projectDetails"
				:key="projectDetail.id"
				class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
			>
        <p
            class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"
        >
        {{ projectDetail.header }}
        </p>
        {{ projectDetail.details }}
			</p>
		</div>
</template>
