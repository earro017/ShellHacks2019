<template>
  <div>
    <main id="mainContent">
      <div class="text-center header ">
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

<b-container class="bv-example-row">
  <b-row>
    <b-col><b-card
    title="NAACP"
    img-src="https://pbs.twimg.com/card_img/1173415593191624705/KNcrXED1?format=jpg&name=medium"
    height ="250"
    width ="240"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      FREE #HIV tests at select Walgreens June 25-27. Find locations: http://greaterthan.org/walgreens #IGotTested #NHTD http://ow.ly/i/bsivP
    </b-card-text>
<a
          href="https://mobile.twitter.com/NAACP/status/613402131039694848"
          class="btn btn-primary my-2"
        >Follow @NAACP</a>
  </b-card></b-col>
    <b-col><b-card
    title="BlackGirlsRun"
    img-src="https://pbs.twimg.com/media/CIbhnooXAAASF27?format=jpg&name=small"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      National HIV Testing Day is 6/27! Free testing at local participating @Walgreens http://greaterthan.org/Walgreens #IGotTested
    </b-card-text>

    <a href="https://mobile.twitter.com/blackgirlsrun/status/614426470635696128"
          class="btn btn-primary my-2">Follow @blackgirlsrun</a>
  </b-card></b-col>
    <b-col><b-card
    title="Greater Than AIDS"
    img-src="https://pbs.twimg.com/card_img/1171797512191127553/qj5XWTEJ?format=jpg&name=medium"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Did you know you can get free or low-cost #HIV testing year round? Go to http://greaterthan.org/find-services for locations near you! #IGotTested
    </b-card-text>
    <a href="https://mobile.twitter.com/GreaterThanAIDS/status/882622591021629440"
          class="btn btn-primary my-2">Follow @GreaterThanAIDS</a>
  </b-card></b-col>
  </b-row>
</b-container>
       <div>
  
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

