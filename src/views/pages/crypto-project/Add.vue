<script setup>
import Tasks from "@/views/pages/crypto-project/Tasks.vue"
import Accounts from "@/views/pages/crypto-project/Accounts.vue";

const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
const tab = ref('one')

const project={
  projectName: "ZKGAP",
  tier: "s",
  cost: "11",
}

const items= [
  { text: 'Real-Time', icon: 'mdi-clock', sub:'111'},
  { text: 'Audience', icon: 'mdi-account', sub:'222'},
  { text: 'Conversions', icon: 'mdi-flag', sub:'333'},
]
</script>

<template>
  <VRow>
    <VCol cols="4">
    <VCard :title="project.projectName">
      <template v-slot:prepend>
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
        <VListItem
          v-for="(item, i) in items"
          :key="i"
          variant="text"
        >

          <span class="text-body-1 text-medium-emphasis mr-2">{{item.text+':'}}</span>
          <span>{{item.sub}}</span>
        </VListItem>

        </VList>


      </VCardText>
      <VCardText class="d-flex justify-center">
        <VBtn >edit</VBtn>
      </VCardText>
    </VCard>
    </VCol>



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
              <VForm @submit.prevent="() => {}">
              <VRow>
                <!-- 👉 First Name -->
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

                <!-- 👉 Remember me -->
                <VCol cols="12">
                  <VCheckbox
                    v-model="checkbox"
                    label="Remember me"
                  />
                </VCol>

                <VCol
                  cols="12"
                  class="d-flex gap-4"
                >
                  <VBtn type="submit">
                    Submit
                  </VBtn>

                  <VBtn
                    type="reset"
                    color="secondary"
                    variant="tonal"
                  >
                    Reset
                  </VBtn>
                </VCol>
              </VRow>
            </VForm>
            </VWindowItem>
          </VWindow>


        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
