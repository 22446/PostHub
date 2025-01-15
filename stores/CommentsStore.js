import axios from "axios";

export const useComments = defineStore('comments', {    
    state:()=>({
        loadingaddComment:false,
        loadingUpdateComment:false,
        loadingComments:{},
        comments:[]
    }),
    actions:{
        async getAllComments(id){
            this.loadingComments[id]=true
            await axios.get(`https://linked-posts.routemisr.com/posts/${id}/comments`,
                {headers:{token:useCookie('socialToken').value}}
            ).then((res)=>{
                this.comments=res
                console.log(res)
            }).catch((err)=>{             
                console.log(err)
            }).finally(()=>{
                this.loadingComments[id]=false
            })
           
        },
        async addComment(comment,id){
            this.loadingaddComment=true
            await axios.post(`https://linked-posts.routemisr.com/comments`,{content:comment,post:id},{
                headers:{token:useCookie('socialToken').value}
            }).then((res)=>{
                console.log(res)
                this.getAllComments(id)
            }).catch((err)=>{
                console.log(err)
            }).finally(()=>{
                this.loadingaddComment=false
            })
        },
        async updateComment(id,postId,comment){
            this.loadingUpdateComment=true
            await axios.put(`https://linked-posts.routemisr.com/comments/${id}`,{content:comment},
            {
                headers:{token:useCookie('socialToken').value}
             }).then((res)=>{
                console.log(res) 
                this.getAllComments(postId)
               
            }).catch((err)=>{
                console.log(err)
            }).finally(()=>{
                this.loadingUpdateComment=false
            })
        }
    }
});