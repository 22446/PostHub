export default defineNuxtRouteMiddleware((to)=>{
    if(useCookie('socialToken').value && (to.path==='/login' || to.path==='/signup')  ){
        return navigateTo('/')    
    }else if(!useCookie('socialToken').value && (to.path !== '/login' && to.path !== '/signup'))
            {
        return navigateTo('/login')
    }
})