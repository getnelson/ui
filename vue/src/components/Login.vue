<template>
  <div class="d-flex bd-highlight full-height radial">
    <main class="d-flex flex-column bd-highlight login">
      <div class="d-flex flex-row justify-content-center bd-highlight mt-5">
        <!-- login card -->
        <div class="card" style="max-width: 30rem; padding: 3.8rem;">
          <div class="d-flex card-header">
            <h2 class="p-0 m-0">
              Login
            </h2>
          </div>
          <div class="d-flex flex-row flex-wrap card-body justify-content-center" style="width: 290px;">
            <div class="d-flex flex-row mb-4 font-weight-light"><p>Please login using either your Github.com or Github Enterprise account.</p></div>
            <div class="d-flex flex-row mb-4">
              <a href="/auth/login"
                 class="btn btn-secondary btn-lg">
                <i class="fab fa-github"></i>
                Authenticate with Github
              </a>
            </div>
          </div>
          <div class="card-footer text-center text-muted">
            v0.11.129
          </div>
        </div>
        <!-- e/o login card -->
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style>

</style>
