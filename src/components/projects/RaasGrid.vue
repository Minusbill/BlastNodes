<script setup>
import { ref, computed, onMounted } from 'vue';
import feather from 'feather-icons';
import ProjectsFilter from './ProjectsFilter.vue';
import ProjectSingle from './ProjectSingle.vue';
import projectsData from '../../data/raasProjects';

// Data
const projects = ref(projectsData);
const projectsHeading = ref('RAAS  模块化');
const selectedCategory = ref('');
const searchProject = ref('');

// Computed
const filteredProjects = computed(() => {
  if (selectedCategory.value) {
    return filterProjectsByCategory();
  } else if (searchProject.value) {
    return filterProjectsBySearch();
  }
  return projects.value;
});

// Methods
function filterProjectsByCategory() {
  return projects.value.filter((item) => {
    let category = item.category.charAt(0).toUpperCase() + item.category.slice(1);
    return category.includes(selectedCategory.value);
  });
}

function filterProjectsBySearch() {
  let project = new RegExp(searchProject.value, 'i');
  return projects.value.filter((el) => el.title.match(project));
}

onMounted(() => {
  feather.replace();
});
</script>


<template>
	<!-- Projects grid -->
	<section class="pt-10 sm:pt-14">
		<!-- Projects grid title -->
		<div class="text-center">
			<p
				class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
			>
				{{ projectsHeading }}
			</p>
		</div>

<!--		&lt;!&ndash; Filter and search projects &ndash;&gt;-->
<!--		<div class="mt-10 sm:mt-10">-->
<!--			<h3-->
<!--				class="font-general-regular-->
<!--					text-center text-secondary-dark-->
<!--					dark:text-ternary-light-->
<!--					text-md-->
<!--					sm:text-xl-->
<!--					font-normal-->
<!--					mb-4-->
<!--				"-->
<!--			>-->
<!--			</h3>-->
<!--			<div-->
<!--				class="-->
<!--					flex-->
<!--					justify-between-->
<!--					border-b border-primary-light-->
<!--					dark:border-secondary-dark-->
<!--					pb-3-->
<!--					gap-2-->
<!--				"-->
<!--			>-->
<!--&lt;!&ndash;				<div class="flex justify-between gap-2">&ndash;&gt;-->
<!--&lt;!&ndash;					<span&ndash;&gt;-->
<!--&lt;!&ndash;						class="&ndash;&gt;-->
<!--&lt;!&ndash;							hidden&ndash;&gt;-->
<!--&lt;!&ndash;							sm:block&ndash;&gt;-->
<!--&lt;!&ndash;							bg-primary-light&ndash;&gt;-->
<!--&lt;!&ndash;							dark:bg-ternary-dark&ndash;&gt;-->
<!--&lt;!&ndash;							p-2.5&ndash;&gt;-->
<!--&lt;!&ndash;							shadow-sm&ndash;&gt;-->
<!--&lt;!&ndash;							rounded-xl&ndash;&gt;-->
<!--&lt;!&ndash;							cursor-pointer&ndash;&gt;-->
<!--&lt;!&ndash;							"&ndash;&gt;-->
<!--&lt;!&ndash;					>&ndash;&gt;-->
<!--&lt;!&ndash;						<i&ndash;&gt;-->
<!--&lt;!&ndash;							data-feather="search"&ndash;&gt;-->
<!--&lt;!&ndash;							class="text-ternary-dark dark:text-ternary-light"&ndash;&gt;-->
<!--&lt;!&ndash;						></i>&ndash;&gt;-->
<!--&lt;!&ndash;					</span>&ndash;&gt;-->
<!--&lt;!&ndash;					<input&ndash;&gt;-->
<!--&lt;!&ndash;						v-model="searchProject"&ndash;&gt;-->
<!--&lt;!&ndash;						class="font-general-medium&ndash;&gt;-->
<!--&lt;!&ndash;						pl-3&ndash;&gt;-->
<!--&lt;!&ndash;						pr-1&ndash;&gt;-->
<!--&lt;!&ndash;						sm:px-4&ndash;&gt;-->
<!--&lt;!&ndash;						py-2&ndash;&gt;-->
<!--&lt;!&ndash;						border-1 border-gray-200&ndash;&gt;-->
<!--&lt;!&ndash;						dark:border-secondary-dark&ndash;&gt;-->
<!--&lt;!&ndash;						rounded-lg&ndash;&gt;-->
<!--&lt;!&ndash;						text-sm&ndash;&gt;-->
<!--&lt;!&ndash;						sm:text-md&ndash;&gt;-->
<!--&lt;!&ndash;						bg-secondary-light&ndash;&gt;-->
<!--&lt;!&ndash;						dark:bg-ternary-dark&ndash;&gt;-->
<!--&lt;!&ndash;						text-primary-dark&ndash;&gt;-->
<!--&lt;!&ndash;						dark:text-ternary-light&ndash;&gt;-->
<!--&lt;!&ndash;						"&ndash;&gt;-->
<!--&lt;!&ndash;						id="name"&ndash;&gt;-->
<!--&lt;!&ndash;						name="name"&ndash;&gt;-->
<!--&lt;!&ndash;						type="search"&ndash;&gt;-->
<!--&lt;!&ndash;						required=""&ndash;&gt;-->
<!--&lt;!&ndash;						placeholder="Search Projects"&ndash;&gt;-->
<!--&lt;!&ndash;						aria-label="Name"&ndash;&gt;-->
<!--&lt;!&ndash;					/>&ndash;&gt;-->
<!--&lt;!&ndash;				</div>&ndash;&gt;-->
<!--&lt;!&ndash;				<ProjectsFilter @filter="selectedCategory = $event" />&ndash;&gt;-->
<!--			</div>-->
<!--		</div>-->

		<!-- Projects grid -->
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6 sm:gap-10"
		>
			<ProjectSingle
				v-for="project in filteredProjects"
				:key="project.id"
				:project="project"
			/>
		</div>
	</section>
</template>

<style scoped></style>
