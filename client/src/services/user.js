import {CustomCookies} from "../utils/cookies";

export async function sentInfoAboutUser() {
    const endUserId = new CustomCookies().getEndUserId()
    const currentUrl = window.location.href
    console.log(endUserId, currentUrl)
    await fetch('http://0.0.0.0:5000/where', {
        method: 'POST',
        body: JSON.stringify({endUserId, webPageURL: currentUrl})
    })
        .then(res => console.log('OK'))
        .catch(error => console.log(error))
}