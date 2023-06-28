export class CRUDBasket {
    getProducts() {
        return JSON.parse(localStorage.getItem('basket'));
    }

    setProduct(product) {
        const products = this.getProducts()

        if (products) {

            const uniqProduct = products.filter(value => value.id === product.id)

            if (!uniqProduct.length) {
                products.unshift(product)
                localStorage.setItem('basket', JSON.stringify(products));
                return true;
            }

            return false
        }

        localStorage.setItem('basket', JSON.stringify([product]));
    }

    deleteProduct(product) {
        const products = this.getProducts()
        const uniqProduct = products.filter(value => value.id !== product.id)

        localStorage.setItem('basket', JSON.stringify(uniqProduct))
        return true
    }

}