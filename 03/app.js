new Vue({
    el: '#app',
    data: {
        bruto: 0,
        liquido: 0
    },
    computed: {
        inss() {
            if (this.bruto !== 0 && this.bruto) {
                var desconto = 0
                if (this.bruto == 1045) {
                    desconto = 0.075 * this.bruto
                } else if (this.bruto >= 1045.01 && this.bruto < 2089.60) {
                    desconto = 0.09 * this.bruto
                } else if (this.bruto >= 2089.61 && this.bruto < 3134.40) {
                    desconto = 0.12 * this.bruto
                } else {
                    desconto = 713.10
                }
                this.liquido = this.bruto - desconto
                return desconto.toFixed(2)
            }
        },
        irrf() {
            if (this.bruto !== 0 && this.bruto) {
                var desconto = 0
                if (this.liquido < 1903.99) {
                    desconto = 0
                } else if (this.liquido >= 1903.99 && this.liquido < 2826.65) {
                    desconto = 0.075 * this.liquido - 142.80
                } else if (this.liquido >= 2826.66 && this.liquido < 3751.05) {
                    desconto = 0.15 * this.liquido - 354.80
                } else if (this.liquido >= 3751.06 && this.liquido < 4664.68) {
                    desconto = 0.225 * this.liquido - 636.13
                } else {
                    desconto = 0.275 * this.liquido - 869.36
                }
                return desconto.toFixed(2)
            }
        },
        total() {
            if (this.bruto !== 0 && this.bruto) {
                baseTotal = this.bruto - this.inss - this.irrf
                return baseTotal.toFixed(2)
            }
        }
    }
})