<template>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" :src="product.picture" alt="Card image cap" />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ product.name }}</h5>
      <!-- <p class="card-text">
        {{ product.description }}
      </p> -->
    </div>
    <h6 class="price flex-column mt-auto">{{ product.price }}$</h6>
    <div>
      <div v-if="showModal">
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Product description</h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true" @click="showModal = false"
                        >&times;</span
                      >
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>{{ product.description }}</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      @click="showModal = false"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <button type="button" class="btn btn-primary" @click="showModal = true">
        Details
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCarD",
  props: ["product"],
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/styles/ProductCard.scss";
</style>
