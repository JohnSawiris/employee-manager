<template>
  <div class="employees">
    <v-snackbar v-model="snackbar" :timeout="6000" top>
      {{feedback}}
      <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
    <h2 class="display-1 font-weight-light mb-2 mt-3 text-xs-center">Employees</h2>
    <EmployeeTable :employees-list="employees"/>
    <EmployeeCard :employees-list="employees" />
  </div>
</template>

<script>
import EmployeeTable from "@/components/EmployeeTable";
import EmployeeCard from "@/components/EmployeeCard";
import axios from "axios";

export default {
  data: () => ({
    employees: [],
    feedback: "",
    snackbar: false,
  }),
  components: {
    EmployeeTable,
    EmployeeCard
  },
  methods: {
    getEmployees() {
      axios
        .get("https://reqres.in/api/users?page=4")
        .then(res => this.employees = [...this.employees, ...res.data.data])
        .catch(err => (this.feedback = err.message));
    }
  },
  created() {
    this.getEmployees();
  }
};
</script>

<style>
</style>
