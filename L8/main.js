const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            onSale: false,
            image: './assets/images/socks_blue.jpg',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    computed: {
        title() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' is on Sale!'
            } else {
                return this.brand + ' ' + this.product
            }            
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index;
            this.image = this.variants[index].image;
            this.inStock = this.variants[index].quantity
        }
    }
})