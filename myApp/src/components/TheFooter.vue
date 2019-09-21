<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="row justify-content-around">
        <div class="col-8 col-md-5">
          <h5 class="title"> Reducing Miami's Transmission of HIV/AIDS</h5>
          <p class="description">Description</p>
        </div>
        <div class="col-2">
          <ul class="list-unstyled">
            <li>
              <b-nav-item class="nav-item nav-link active" to="/Home">Home</b-nav-item>
            </li>
            <li>
              <a class="footerlink" href="/">MasterDetail</a>
            </li>
            <li>
              <a class="footerlink" href="/">Resources</a>
            </li>
            <li>
              <a class="footerlink" href="/">Social Impact</a>
            </li>
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
