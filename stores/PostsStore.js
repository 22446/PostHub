import axios from 'axios';
export const UsePosts=defineStore('post',{
    state:()=>({
        loading:false,
        posts:[],
        text:'',
        post:{},
        image:null
    }),
    actions:{
        async getAppPosts(){
            this.loading=true
            await axios.get('https://linked-posts.routemisr.com/posts?limit=50',
            {
                headers:{token:useCookie('socialToken').value}
            }
        ).then((res)=>{
            this.posts=res
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        }).finally(()=>{
            this.loading=false
        })
        },
        handleFileUpload(event) {
            this.image = event.target.files[0];
            console.log('Selected image:', this.image); 
        },
        async createPost(){
            const formfile=new FormData()
            if (this.image) {
                formfile.append('image', this.image);
            }
            formfile.append('body', this.text)
            await axios.post('https://linked-posts.routemisr.com/posts', formfile,
            {
                headers:{token:useCookie('socialToken').value}
            }).then((res)=>{    
                console.log(res)
                this.getAppPosts()
                console.log(this.text,this.image)
            }).catch((err)=>{
                console.log(err)
            })  
        },
        async getSinglePost(id){
            this.loading=true
            await axios.get(`https://linked-posts.routemisr.com/posts/${id}`,
                {headers:{token:useCookie('socialToken').value}}
            ).then((res)=>{
                if(res?.data?.post){
                this.post=res.data.post
                }
                console.log(res)
            }).finally(()=>{
                this.loading=false
            })
        }
    }
})
