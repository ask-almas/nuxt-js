<template>
    <section class="featured-posts">
        <PostPreview id="1"
                     thumbnail="https://about.canva.com/wp-content/uploads/sites/3/2016/08/Band-Logo.png"
                     title="Title 1"
                     :is-admin="isAdmin"
                     previewText="Previe text 1">
        </PostPreview>
        <PostPreview id="2"
                     thumbnail="https://about.canva.com/wp-content/uploads/sites/3/2016/08/Band-Logo.png"
                     title="Title 2"
                     :is-admin="isAdmin"
                     previewText="Previe text 2">
        </PostPreview>
    </section>
</template>

<script>
    import PostPreview from '../../components/Posts/PostPreview'
    export default {
        components: {
            PostPreview
        },
        props:{
            isAdmin:{
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style>
    .featured-posts {
        display: flex;
        padding: 20px;
        box-sizing: border-box;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
</style>
