<template>
<div class="biFootCont">
  <div class="row biFooter">
    <div class="col-2">
      <h6>SOLUTIONS</h6>
      <b-link class="biLink row" href="">
        Marketing
      </b-link>
      <b-link class="biLink row" href="">
        Analytics
      </b-link>
      <b-link class="biLink row" href="">
        Commerce
      </b-link>
      <b-link class="biLink row" href="">
        Insights
      </b-link>
    </div>
    <div class="col-2">
      <h6>SUPPORT</h6>
      <b-link class="biLink row" href="">
        Pricing
      </b-link>
      <b-link class="biLink row" href="">
        Documentation
      </b-link>
      <b-link class="biLink row" href="">
        Guides
      </b-link>
      <b-link class="biLink row" href="">
        API status
      </b-link>
    </div>
    <div class="col-2">
      <h6>COMPANY</h6>
      <b-link class="biLink row" href="">
        About
      </b-link>
      <b-link class="biLink row" href="">
        Blog
      </b-link>
      <b-link class="biLink row" href="">
        Jobs
      </b-link>
      <b-link class="biLink row" href="">
        Press
      </b-link>
      <b-link class="biLink row" href="">
        Partners
      </b-link>
    </div>
    <div class="col-2">
      <h6>LEGAL</h6>
      <b-link class="biLink row" href="">
        Claim
      </b-link>
      <b-link class="biLink row" href="">
        Privacy
      </b-link>
      <b-link class="biLink row" href="">
        Terms
      </b-link>
    </div>
    <div class="col-4">
      <h6>LANGUAGE</h6>
      <b-dropdown
          text="English"
          class="biLanguageDD"
      >
        <b-dropdown-item>English</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
  <div class="row biFooter">
    <v-divider/>
  </div>
</div>
</template>

<script>
export default {
  name: "BiFooter"
}
</script>

<style scoped>

.biFootCont {
  margin: 0;
  padding: 0;
}

.col-2 {
  min-width: 100px;
  margin: 0;
  padding: 0;
}

.col-4 {
  text-align: end;
}

.biFooter {
  margin: 50px auto;
  text-align: left;
  max-width: 80%;
}
.biFooter h6 {
  margin: 30px;
}
.biLink {
  color: black;
  margin: 30px;
  min-width: 200px;
}

.biLanguageDD{
  min-width: 200px;
}

</style>