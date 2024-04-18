<script setup>

const form = ref({
  firstName: '111',
  email: '',
  mobile: false,
})
const desserts = [
  {
    dessert: 'Frozen Yogurt',
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Ice cream sandwich',
    calories: 237,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Eclair',
    calories: 262,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Cupcake',
    calories: 305,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
]
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Basic">
        <VCardText>{{$store.state.user.token}}</VCardText>
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


        <VTable>
          <thead>
          <tr>
            <th class="text-uppercase">
              Desserts (100g Servings)
            </th>
            <th>
              calories
            </th>
            <th>
              Fat(g)
            </th>
            <th>
              Carbs(g)
            </th>
            <th>
              protein(g)
            </th>
          </tr>
          </thead>

          <tbody>
          <tr
            v-for="item in desserts"
            :key="item.dessert"
          >
            <td>
              {{ item.dessert }}
            </td>
            <td class="text-center">
              {{ item.calories }}
            </td>
            <td class="text-center">
              {{ item.fat }}
            </td>
            <td class="text-center">
              {{ item.carbs }}
            </td>
            <td class="text-center">
              {{ item.protein }}
            </td>
          </tr>
          </tbody>
        </VTable>
        <VCardText class="d-flex  justify-end pa-2">
          <v-pagination :length="4" class="float-md-right"></v-pagination>
        </VCardText>
      </VCard>
    </VCol></VRow>
</template>
