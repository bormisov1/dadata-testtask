<template>
  <div>
    <v-col>
      <v-row class="search-bar">
        <v-col cols=6>
          <v-text-field
            class="inn-field"
            type="number"
            inputmode="numeric"
            outlined hide-details
            :value="searchValue"
            @input="searchChange"
            @keypress="onlyNumber">
          </v-text-field>
        </v-col>
        <v-col cols=auto class="search-btn-container">
          <v-btn text outlined
            @click="request">
            Search
          </v-btn>
        </v-col>
      </v-row>
      <v-row v-if="companyDetails || companyNotFound" class="company-data">
        <div>
          {{companyNotFound ? 'Не найдена компания с указанным ИНН' : companyDetails.name}}
        </div>
      </v-row>
    </v-col>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'app',
  data: () => ({
    searchValue: '',
    companyNotFound: false
  }),
  created() {
    this.searchValue = this.search
    document.onkeydown = evt => {
      evt = evt || window.event
      if (evt.keyCode == 13) this.request()
    }
  },
  computed: {
    ...mapState(['search', 'companyDetails'])
  },
  methods: {
    onlyNumber($event) {
      let keyCode = ($event.keyCode ? $event.keyCode : $event.which)
      if (keyCode < 48 || keyCode > 57) $event.preventDefault()
    },
    searchChange(value) {
      this.searchValue = value
      this.$store.dispatch('SET_SEARCH', value)
    },
    async request() {
      this.companyNotFound = false
      const requestResult = await this.$store.dispatch('SEARCH')
      if (!requestResult || requestResult.error) this.companyNotFound = true
    }
  }
}
</script>


<style>
  body {
    font-family: Arial, Helvetica, sans-serif;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }
  .col {
    padding: 0 !important;
  }
  .search-bar {
    width: 100%;
    margin: 20px 0;
    justify-content: center;
  }
  .inn-field {
    min-width: 200px;
  }
  .search-btn-container {
    margin: 0 20px;
    align-self: center;
  }
  .company-data {
    margin: 50px 0;
    width: 100%;
    justify-content: center;
    font-size: 32px;
    line-height: 32px;
    font-weight: 600;
  }
</style>
