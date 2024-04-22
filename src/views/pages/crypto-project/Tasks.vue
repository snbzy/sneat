<script setup>

const projects = ref([])
</script>


<template>
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
    </tr>
    </thead>

    <tbody>
    <tr
      v-for="item in projects"
      :key="item.dessert"
    >
      <td>
        {{ item.projectName }}
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
    </tr>
    </tbody>
  </VTable>
</template>
