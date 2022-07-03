const app = Vue.createApp({
    data() {
        return {
            producto: 'Socks',
            descripcion: '80% lana y 20% polyester',
            image: './assets/images/socks_green.jpg',
            web: 'http://www.clarin.com',
            inStock: true,
            activeClass: false,
            inventario: 100,
            OnSale: true,
            cart: 0,
            carro: 0,
            detalles: ['50% algodon', '22% seda', '18% papel', '10% fibra'],
            talles: ['Large', "Medium", "Small", "XSmall"],
            styles: {
                color: 'red',
                fontsize: '14px'
            },
            variantes: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    methods: {
        add2Cart() {
            this.carro += 1
        },
        removeCart() {
            if (this.carro >= 1) (
                this.carro -= 1
            )
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }

})