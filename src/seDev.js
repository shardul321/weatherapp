const seDev = () => {

    let swUrl = `${process.env.PUBLIC_URL}/serviceworker.js`
    navigator.serviceWorker.register(swUrl).then((res) => {
        console.log(`res`, res);
    }).catch((err) => {
        console.log(`err`, err)
    })
} 
export default seDev;