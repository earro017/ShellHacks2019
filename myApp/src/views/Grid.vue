<template>
  <div>
    <main id="mainContent">
      <div class="text-center header">
        <p><mark></mark></p>
        <h1>
        <mark>Breaking the Taboo of HIV/AIDS</mark>
        </h1>
        <p><mark></mark></p>
      </div>

      <div class="container">
        <div class="row justify-content-center py-5">
          <h2>Community Testimonials</h2>
       </div>

      </div>
    </main>
    <BaseWarningMessage
      v-if="WarningMessageOpen"
      :text="WarningMessageText"
      @onWarningClose="handleWarningClose"
    />
  </div>
</template>

<script>
import CONSTANTS from "@/constants";
import GridComponent from "@/components/GridComponent";
import BaseWarningMessage from "@/components/BaseWarningMessage";

export default {
  name: "Grid",

  components: {
    GridComponent,
    BaseWarningMessage
  },

  data() {
    return {
      gridTextAssets: [
        {
          shortDescription: "",
          title: "",
          id: 0
        }
      ],
      WarningMessageOpen: false,
      WarningMessageText: ""
    };
  },

  created() {
    this.fetchTextAssets();
  },

  methods: {
    fetchTextAssets() {
      fetch(CONSTANTS.ENDPOINT.GRID)
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .then(result => {
          this.gridTextAssets = result;
        })
        .catch(error => {
          this.WarningMessageOpen = true;
          this.WarningMessageText = `${CONSTANTS.ERROR_MESSAGE.GRID_GET} ${error}`;
        });
    },
    handleWarningClose() {
      this.WarningMessageOpen = false;
      this.WarningMessageText = "";
    }
  }
};
</script>

<style scoped>
.header {
  background: #000000 url(https://www.impactbnd.com/hubfs/representation-matters-in-stock-photos.jpg) 100% 100% no-repeat ;
  background-size: cover;
  padding-top: 5rem;
  padding-bottom: 5rem;
}
</style>
