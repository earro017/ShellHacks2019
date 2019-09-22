<template>
  <div>
    <main id="mainContent">
      <div class="text-center header">
        <h1>Breaking the Taboo of HIV/AIDS</h1>
        <p>See who else is being tested and raising our numbers in awareness!</p>
        <a
          href="https://mobile.twitter.com/hashtag/IGotTested?src=hash&i=2e7b6c1e63ce1525&p=h&e=1"
          class="btn btn-primary my-2"
        >Click here to see all Twitter Results for #igottested</a>
      </div>

      <div class="container">
        <div class="row justify-content-center py-5">
          <h1>Community Testimonials</h1>
        </div>

        <div class="row justify-content-around text-center pb-5"> 
          <GridComponent
            v-for="textAsset in gridTextAssets"
            :key="textAsset.id"
            :header="textAsset.title"
            :description="textAsset.shortDescription"
          />
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
  background: #000000 url(https://www.impactbnd.com/hubfs/representation-matters-in-stock-photos.jpg) 100% 100% no-repeat;
  background-size: cover;
  padding-top: 5rem;
  padding-bottom: 5rem;
}
</style>
