<script setup>
import { onMounted } from 'vue';
import {addProject, listProject} from "@/utils/api";

const drawer =ref(false)

const form = ref({
  firstName: '',
  email: '',
  mobile: false,
})

const project = ref({
  projectName: '',
  projectUrl: '',
  projectInfo: '',
})
onMounted(() => {
  listProject().then(res=>{
    projects.value = res.data.rows;
  })
});

const handleAdd =()=>{
  addProject(project.value).then(res=>{
    console.log(res.data)
  })
}
const projects = ref([])

</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard >

        <VCardText >
          <VForm @submit.prevent="() => {}">
            <VRow>
              <VCol cols="4">
                <VTextField
                  v-model="form.firstName"
                  label="First Name"
                  placeholder="John"
                />
              </VCol>

              <VCol cols="4">
                <VTextField
                  v-model="form.email"
                  label="Email"
                  type="email"
                  placeholder="johndoe@example.com"
                />
              </VCol>

              <VCol cols="4">
                <VTextField
                  v-model="form.mobile"
                  label="Mobile"
                  placeholder="+1 123 456 7890"
                  type="number"
                />
              </VCol>

            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>

      <VCol cols="12">
      <VCard>
        <VCardText class="d-flex justify-end ">
            <VBtn class="" @click.stop="drawer = !drawer"
            >
              add project
            </VBtn>
        </VCardText>



        <VTable>
          <thead>
          <tr>
            <th class="text-uppercase">
              Project name
            </th>
            <th>
              Tier
            </th>
            <th>
              Cost type
            </th>
            <th>
              Cost
            </th>
            <th>
              Airdrop status
            </th>
            <th>
              Task process
            </th>
            <th>
              Related projects
            </th>
            <th>
              Tags
            </th>
            <th>
              Chain
            </th>
          </tr>
          </thead>

          <tbody>
          <tr
            v-for="item in projects"
            :key="item.dessert"
          >
            <td>
              <v-avatar>
                <v-img
                  alt="John"
                  :src="item.projectUrl"
                ></v-img>
              </v-avatar>
              <router-link :to="'/crypto/add/' + item.id" class="link-type">
                <span>{{ item.projectName }}</span>
              </router-link>
<!--              <a :href="item.projectUrl" target="_blank" class="link-style">{{ item.projectName }}</a>-->
            </td>
            <td class="text-center">
              {{ item.tier }}
            </td>
            <td class="text-center">
              {{ item.costType }}
            </td>
            <td class="text-center">
              {{ item.cost }}
            </td>
            <td class="text-center">
              {{ item.airdropStatus }}
            </td>
            <td class="text-center">
              {{ item.taskProcess }}
            </td>
            <td class="text-center">
              {{ item.relatedProject }}
            </td>
            <td class="text-center">
              {{ item.tags }}
            </td>
            <td class="text-center">
              {{ item.chain }}
            </td>
          </tr>
          </tbody>
        </VTable>
        <VCardText class="d-flex  justify-end pa-2">
          <v-pagination :length="4" class="float-md-right"></v-pagination>
        </VCardText>
      </VCard>
    </VCol></VRow>
  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
    :width="400"
  >
    <VCard title="add project">
      <VCardText>
        <VForm @submit.prevent="handleAdd">
          <VRow>
            <!-- 👉 First Name -->
            <VCol
              cols="12"
            >
              <VTextField
                v-model="project.projectName"
                label="Project Name"
                placeholder="John"
              />
            </VCol>

            <!-- 👉 Last Name -->
            <VCol
              cols="12"
            >
              <VTextField
                v-model="project.projectUrl"
                label="Project Url"
                placeholder="Doe"
              />
            </VCol>

            <VCol
              cols="12"
              class="d-flex justify-center gap-4"
            >
              <VBtn type="submit" >
                Submit
              </VBtn>

              <VBtn
                type="cancel"
                color="secondary"
                variant="tonal"
                @click="drawer = false"
              >
                cancel
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </v-navigation-drawer>
</template>
