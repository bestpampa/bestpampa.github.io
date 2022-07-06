const app = Vue.createApp({
    data() {
        return {
            producto: 'Socks',
            marca: 'Vue Mastery',
            selectedVariant: 0,
            descripcion: '80% lana y 20% polyester',
            imagen: './assets/images/socks_green.jpg',
            web: 'https://sc.epb.com.ar',
            enStock: true,
            activeClass: false,
            inventario: 50,
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
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    methods: {
        add2Cart() {
            this.carro += 1
            this.inventario -=9
        },
        removeCart() {
            if (this.carro >= 1) (
                this.carro -= 1,
                this.inventario +=9
            )
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        titulo() {
            return this.marca + ' ' + this.producto
        },
        image() {
            return this.variantes[this.selectedVariant].image
        },
        inStock() {
            return this.variantes[this.selectedVariant].quantity
        }
    }

})