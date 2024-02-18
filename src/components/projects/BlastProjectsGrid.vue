<script setup>
import { ref, computed, onMounted } from 'vue';
import feather from 'feather-icons';
import ProjectsFilter from './ProjectsFilter.vue';
import ProjectSingle from './ProjectSingle.vue';
import projectsData from '../../data/Blast/blastOther';
import projectsAboutBlastData from '../../data/Blast/AbotBlast';
import projectsBlastAirdropData from '../../data/Blast/BlastAirdrop';
import projectsBlastDevData from '../../data/Blast/blastDevelop';




// Data
const projects = ref(projectsData);
const aboutBlastData = ref(projectsAboutBlastData);
const aboutBlastAirdropData = ref(projectsBlastAirdropData);
const aboutBlastDev = ref(projectsBlastDevData);


const projectsHeading = ref('Blast : Start and deep in ');
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

// Computed
const filteredAboutBlastProjects = computed(() => {
  if (selectedCategory.value) {
    return filterProjectsByCategory();
  } else if (searchProject.value) {
    return filterProjectsBySearch();
  }
  return aboutBlastData.value;
});

const filteredBlastAirdropProjects = computed(() => {
  if (selectedCategory.value) {
    return filterProjectsByCategory();
  } else if (searchProject.value) {
    return filterProjectsBySearch();
  }
  return aboutBlastAirdropData.value;
});


const filteredBlastDevProjects = computed(() => {
  if (selectedCategory.value) {
    return filterProjectsByCategory();
  } else if (searchProject.value) {
    return filterProjectsBySearch();
  }
  return aboutBlastDev.value;
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

    <div class="text-left">
      <p
          class="font-general-semibold text-1xl sm:text-2xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
      >
        关于 Blast 的 一切/ 入门
      </p>
    </div>

    <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mt-6 sm:gap-10"
    >
    <ProjectSingle
        v-for="project in filteredAboutBlastProjects"
        :key="project.id"
        :project="project"
    />
    </div>

    <br>

    <div class="text-left">
      <p
          class="font-general-semibold text-1xl sm:text-2xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
      >
        关于 怎么参与、获得空投
      </p>
    </div>


    <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mt-6 sm:gap-10"
    >
      <ProjectSingle
          v-for="project in filteredBlastAirdropProjects"
          :key="project.id"
          :project="project"
      />
    </div>

    <br>

    <div class="text-left">
      <p
          class="font-general-semibold text-1xl sm:text-2xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
      >
        关于怎么建设 Blast / 成为开发者
      </p>
    </div>


    <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mt-6 sm:gap-10"
    >
      <ProjectSingle
          v-for="project in filteredBlastDevProjects"
          :key="project.id"
          :project="project"
      />
    </div>


    <br>

    <div class="text-left">
      <p
          class="font-general-semibold text-1xl sm:text-2xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
      >
        其他：Blast 与 L2、Gamefi的可行性
      </p>
    </div>


    <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mt-6 sm:gap-10"
    >
      <ProjectSingle
          v-for="project in filteredAboutBlastProjects"
          :key="project.id"
          :project="project"
      />
    </div>

    <br>

    <!-- Projects grid -->
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mt-6 sm:gap-10"
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
