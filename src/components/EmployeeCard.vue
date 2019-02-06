<template>
  <div class="hidden-md-and-up">
    <v-layout row wrap>
      <v-flex xs11 sm7 class="mt-3 mx-auto" v-for="employee in modifiedList" :key="employee.id">
        <v-card dark>
          <v-layout row wrap>
            
            <v-flex xs5>
              <v-card-title primary-title>
                <div>
                  <div class="headline">
                  {{`${employee.first_name} ${employee.last_name}`}}
                </div>
                <div class="font-weight-light">{{employee.position}}</div>
                </div>
              </v-card-title>
            </v-flex>
            <v-flex xs7>
              <v-img
                :src="employee.avatar"
                height="125px"
                width="125px"
                class="ml-auto"
              ></v-img>
            </v-flex>
          </v-layout>
          
          
        </v-card>
      </v-flex>
    </v-layout>
      <v-btn color="indigo" class="white--text mx-auto d-block mt-3">Load more</v-btn>
  </div>
</template>

<script>
export default {
  name: "EmployeeCard",
  props: {
    employeesList: Array
  },
  data: () => ({
    employees: [],
    positions: [
      "Frontend Devloper",
      "UI Designer",
      "UX Consultant"
    ]
  }),
  created() {
    this.employees = this.employeesList;
  },
  watch: {
    employeesList(list) {
      this.employees = list;
    }
  },
  computed: {
    // Modify the list to add positions
    modifiedList() {
      return this.employees.map((emp, index) => {
        emp.position = this.positions[index]
        return emp
      });
    }
  },
};
</script>

<style>
</style>
