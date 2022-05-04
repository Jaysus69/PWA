if('serviceWorker' in navigator)
{
    navigator.serviceWorker.register('sw.js')
    .then((reg)=>console.log("Service Worker Register",reg))
    .catch((error)=>console.log("Service Worker not register",error))
}