<script setup>
import { ref, computed, onMounted } from 'vue';
import feather from 'feather-icons';
import ProjectSingle from '../projects/ProductProjectSingle.vue';
import projectsData from '../../data/productProjects';

// Data
const projects = ref(projectsData);
const projectsHeading = ref('Web3周边️产品');
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

		<!-- Filter and search projects -->
		<div class="mt-10 sm:mt-10">
			<h3
				class="font-general-regular
					text-center text-secondary-dark
					dark:text-ternary-light
					text-md
					sm:text-xl
					font-normal
					mb-4
				"
			>
			</h3>
		</div>

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
