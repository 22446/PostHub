import axios from 'axios';
export const useAuth = defineStore('auth', {
    state: () => ({
        user: null,
        loading: false
    }),
    actions: {
        async registerUser(body,routes) {
           this.loading = true
               await axios.post('https://linked-posts.routemisr.com/users/signup',body)
               .then((res)=>{
                console.log(res)
                console.log(routes)

                routes.push('/login')
               }).catch((err)=>{
                console.log(err)
               }).finally(()=>{
                   this.loading = false
               })
        },
        async LoginUser(body,routes) {
            this.loading = true
            await axios.post('https://linked-posts.routemisr.com/users/signin',body)
            .then((res)=>{
             console.log(res)
             console.log(routes)
             useCookie('socialToken').value=res.data.token
             routes.push('/')
            }).catch((err)=>{
             console.log(err)
            }).finally(()=>{
                this.loading = false
            })

     }
    }
});
