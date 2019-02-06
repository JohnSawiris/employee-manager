<template>
  <div class="employees-table container hidden-sm-and-down">
    <v-data-table
      v-if="employees.length > 0"
      :headers="headers"
      :items="employees"
      hide-actions
      class="mx-auto"
      dark
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.first_name }}</td>
        <td class="text-xs-center">{{ props.item.last_name }}</td>
        <td class="text-xs-right">
          <v-avatar :size="40">
            <img :src="props.item.avatar" alt="alt">
          </v-avatar>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "EmployeeTable",
  props: {
    employeesList: Array
  },
  data: () => ({
    headers: [
      {
        text: "First Name",
        sortable: false,
        value: "firstname"
      },
      {
        text: "Last Name",
        sortable: false,
        align: 'center',
        value: "lastname"
      },
      {
        text: "Avatar",
        sortable: false,
        align: 'right',
        value: "avatar"
      }
    ],
    employees: []
  }),
  created() {
    this.employees = this.employeesList;
  },
  watch: {
    // Watch for changes on employeesList prop
    employeesList: function(list) {
      this.employees = list;
    }
  }
};
</script>

<style>
</style>
