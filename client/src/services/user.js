import {CustomCookies} from "../utils/cookies";

export async function sentInfoAboutUser() {
    const endUserId = new CustomCookies().getEndUserId()
    const currentUrl = window.location.href

    await fetch('http://localhost:5000/where', {
        mode: "no-cors",
        method: 'POST',
        body: JSON.stringify({endUserId, webPageURL: currentUrl})
    })
        .then(res => console.log('OK'))
        .catch(error => console.log(error))
}