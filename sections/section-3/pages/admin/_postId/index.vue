<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPosts"/>
        </section>
    </div>
</template>

<script>
    import AdminPostForm from '../../../components/Admin/AdminPostForm'
    export default {
        layout: 'admin',
        components:{
            AdminPostForm
        },
        data(){
            return{
                loadedPosts:{
                    author: '',
                    title: '',
                    content: 'Super amazing! Thanks for that!',
                    thumbnailLink: 'https://about.canva.com/wp-content/uploads/sites/3/2016/08/Band-Logo.png'
                }
            }
        }
    }
</script>

<style>
    .update-form {
        width: 90%;
        margin: 20px auto;
    }
    @media (min-width: 768px) {
        .update-form {
            width: 500px;
        }
    }
</style>
