<script setup>
import Tasks from "@/views/pages/crypto-project/Tasks.vue"
import Accounts from "@/views/pages/crypto-project/Accounts.vue";
import {getProject} from "@/utils/api";
import {onMounted} from "vue";
import { useRoute } from 'vue-router';
const { query, params } = useRoute();

const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
const tab = ref('one')
const dialog= ref(false)

const project=ref({})

const items= [
  { text: 'Real-Time', icon: 'mdi-clock', sub:'111'},
  { text: 'Audience', icon: 'mdi-account', sub:'222'},
  { text: 'Conversions', icon: 'mdi-flag', sub:'333'},
]

onMounted(() => {
  let projectId=params.projectId;
  getProject(projectId).then(res=>{
    project.value = res.data.data;
  })
});
</script>

<template>
  <VRow>
    <VCol cols="4">
    <VCard :title="project.projectName" :subtitle="project.projectInfo">
      <template v-slot:prepend >
        <VAvatar color="blue-darken-2">
          <VImg
            alt="John"
            src="https://icon.horse/icon/dedust.io"
          ></VImg>
        </VAvatar>
      </template>


      <VCardText >
        <hr class="v-divider my-4"/>
        <VList  lines="one" density="compact" class="card-list" >
        <VListItem variant="text">
          <span class="text-sm text-medium-emphasis mr-2">ProjectUrl:</span>
          <span>{{project.projectUrl}}</span>
        </VListItem>

          <VListItem variant="text">
            <span class="text-sm text-medium-emphasis mr-2">Tier:</span>
            <span>{{project.tier}}</span>
          </VListItem>

          <VListItem variant="text">
            <span class="text-sm text-medium-emphasis mr-2">Cost Type:</span>
            <span>{{project.costType}}</span>
          </VListItem>

          <VListItem variant="text">
            <span class="text-sm text-medium-emphasis mr-2">Cost:</span>
            <span>{{project.cost}}</span>
          </VListItem>

          <VListItem variant="text">
            <span class="text-sm text-medium-emphasis mr-2">Airdrop Status:</span>
            <span>{{project.airdropStatus}}</span>
          </VListItem>

          <VListItem variant="text">
            <span class="text-sm text-medium-emphasis mr-2">Task Process:</span>
            <span>{{project.taskProcess}}</span>
          </VListItem>

          <VListItem variant="text">
            <span class="text-sm text-medium-emphasis mr-2">Tags:</span>
            <span>{{project.tags}}</span>
          </VListItem>

          <VListItem variant="text">
            <span class="text-sm text-medium-emphasis mr-2">Chain:</span>
            <span>{{project.chain}}</span>
          </VListItem>

          <VListItem variant="text">
            <span class="text-sm text-medium-emphasis mr-2">Stage:</span>
            <span>{{project.stage}}</span>
          </VListItem>

          <VListItem variant="text">
            <span class="text-sm text-medium-emphasis mr-2">Token:</span>
            <span>{{project.token}}</span>
          </VListItem>
          <VListItem variant="text">
            <span class="text-sm text-medium-emphasis mr-2">Contract:</span>
            <span>{{project.contract}}</span>
          </VListItem>
          <VListItem variant="text">
            <span class="text-sm text-medium-emphasis mr-2">Max Supply:</span>
            <span>{{project.maxSupply}}</span>
          </VListItem>

          <VListItem variant="text">
            <span class="text-sm text-medium-emphasis mr-2">Referral</span>
            <span>{{project.referral}}</span>
          </VListItem>


        </VList>


      </VCardText>
      <VCardText class="d-flex justify-center">
        <VBtn @click="dialog = true">edit</VBtn>
      </VCardText>
    </VCard>
    </VCol>

    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        max-width="800px"
        variant="elevated"
      >
        <VCardText >
        <VCardTitle class="text-center">
          Edit Project
        </VCardTitle>
        </VCardText>
        <VCardText>
        <VForm @submit.prevent="() => {}">
          <VRow>
            <!-- 👉 First Name -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="project.projectName"
                label="First Name"
                placeholder="John"
              />
            </VCol>

            <!-- 👉 Last Name -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="project.projectUrl"
                label="Last Name"
                placeholder="Doe"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="firstName"
                label="First Name"
                placeholder="John"
              />
            </VCol>

            <!-- 👉 Last Name -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="lastName"
                label="Last Name"
                placeholder="Doe"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="firstName"
                label="First Name"
                placeholder="John"
              />
            </VCol>

            <!-- 👉 Last Name -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="lastName"
                label="Last Name"
                placeholder="Doe"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="firstName"
                label="First Name"
                placeholder="John"
              />
            </VCol>

            <!-- 👉 Last Name -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="lastName"
                label="Last Name"
                placeholder="Doe"
              />
            </VCol>

            <!-- 👉 Email -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="email"
                label="Email"
                placeholder="johndoe@email.com"
              />
            </VCol>

            <!-- 👉 City -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="city"
                label="City"
                placeholder="New York"
              />
            </VCol>

            <!-- 👉 Country -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="country"
                label="Country"
                placeholder="United States"
              />
            </VCol>

            <!-- 👉 Company -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="company"
                label="Company"
                placeholder="Pixinvent"
              />
            </VCol>


            <VCol
              cols="12"
              class="d-flex justify-center gap-4"
            >
              <VBtn type="submit">
                Submit
              </VBtn>

              <VBtn
                type="cancel"
                color="secondary"
                variant="tonal"
                @click="dialog = false"
              >
                cancel
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
        </VCardText>
      </v-card>
    </v-dialog>



    <VCol cols="8">
      <VTabs
        v-model="tab"
        class="v-tabs-pill mb-4"
      >
        <VTab value="one">tasks</VTab>
        <VTab value="two">accounts</VTab>
        <VTab value="three">Item Three</VTab>
      </VTabs>

      <VCard >
        <VCardText>
          <VWindow v-model="tab">
            <VWindowItem value="one">
              <Tasks/>
            </VWindowItem>

            <VWindowItem value="two">
              <Accounts />
            </VWindowItem>

            <VWindowItem value="three">

            </VWindowItem>
          </VWindow>


        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
