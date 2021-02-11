<template>
  <div class="row">
    <ProductCard
      class="card"
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import axios from "axios";
import ProductCard from "./ProductCard.vue";

export default {
  name: "Products",
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async getProducts() {
      const response = await axios.get("products", {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("loginToken"),
        },
      });

      this.products = response.data;
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
@import "src/styles/Products.scss";
</style>
