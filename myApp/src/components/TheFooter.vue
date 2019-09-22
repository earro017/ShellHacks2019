<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="row justify-content-around">
        <div class="col-8 col-md-5">
          <h5 class="title"> Reducing Miami's Transmission of HIV/AIDS</h5>
          <p class="description">Responding rapidly to detect and respond to growing HIV clusters and preventing new infections one person at a time</p>
        </div>
        <div class="col-2">
          <ul class="list-unstyled">
           
            <li class="list-unstyled"><a href="/Blank2">Home</a></li>
            <li class="list-unstyled"><a href="/List">Resources</a></li>
            <li class="list-unstyled"><a href="/Grid">Social Impact</a></li>
            <li class="list-unstyled"><a href="/Master_Detail">View Map</a></li>
           
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>


<style scoped>
.footer {
  background-color: #1d1d1d;
  padding-top: 2rem;
  padding-bottom: 4rem;
}

.title {
  color: #fff;
}

.description {
  color: #fff;
}

.footerlink,
.footerlink:hover {
  color: #fff;
}
</style>
