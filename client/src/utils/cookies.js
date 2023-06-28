export class CustomCookies {

    getEndUserId() {
        const cook = document.cookie
        const arrayCookies = cook.split(';')

        for (const cookie of arrayCookies) {
            if (cookie.includes('endUserId')) {
                return cookie.replace('endUserId=', '')
            }
        }

        return this.setEndUserId()
    }

    setEndUserId() {
        const endUserId = crypto.randomUUID()
        document.cookie = `endUserId=${endUserId}`
        return endUserId
    }
}