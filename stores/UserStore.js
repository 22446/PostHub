import axios from "axios"

export const UserStore=defineStore('user',{
    state:()=>({
        user:[],
        postUser:[],
        loadingDrop:{},
        loading:false,
        text:'',
        image:null
    }),
    actions:{
        async GetUser(){
            await axios.get('https://linked-posts.routemisr.com/users/profile-data',{
                headers:{token:useCookie('socialToken').value}
            }).then((res)=>{
                this.user=res
                console.log(res)
            })
        },
        async UserPost(id){
            this.loading=true
            await axios.get(`https://linked-posts.routemisr.com/users/${id}/posts`,{
                headers:{token:useCookie('socialToken').value}
            }).then((res)=>{
                this.postUser=res
                console.log(res)
            }).finally(()=>{
                this.loading=false
            })  
        },
        async deletePost(id,userId){ 
            this.loadingDrop[id]=true 
            await axios.delete(`https://linked-posts.routemisr.com/posts/${id}`,
            {headers:{token:useCookie('socialToken').value}}
        ).then((res)=>{
            console.log(res)
            this.UserPost(userId)
        }).finally(()=>{
            this.loadingDrop[id]=false
        })
         },
         handleFileUpload(event) {
             this.image = event.target.files[0];
             console.log('Selected image:', this.image); 
         },
         async UpdatePost(id,userId){
             const formfile=new FormData()
             if (this.image) {
                 formfile.append('image', this.image);
             }
             formfile.append('body', this.text)
             await axios.put(`https://linked-posts.routemisr.com/posts/${id}`, formfile,
             {
                 headers:{token:useCookie('socialToken').value}
             }).then((res)=>{    
                 console.log(res)
                 this.UserPost(userId)
                 console.log(this.text,this.image)
             }).catch((err)=>{
                 console.log(err)
             })  
         }
    }
})