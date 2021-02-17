<template>
    <div>
        <navbar/>
        <div>
            <div class="blog__header">
                <h1 class="text-center my-10">Welcome to TeklabSpace <span class="text-green-500">Blog!</span></h1>

                <div class="blog__content px-10 mb-5">
                    <div class="blog__grid">
                        <div>
                            <img src="../assets/img/blog_img.png" alt="">
                            <img src="../assets/img/blog_img.png" alt="">
                        </div>
                        <div>
                            <img style=" width: 100%;height: auto;" src="../assets/img/blog_img2.png" alt="">
                        </div>
                        <div>
                            <img src="../assets/img/blog_img.png" alt="">
                            <img src="../assets/img/blog_img.png" alt="">
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <main-footer></main-footer>
    </div>
</template>

<script>
import navbar from "@/components/extra/navbar";
import ImageBanner from "@/components/extra/ImageBanner";
import MainFooter from "@/components/extra/MainFooter";

export default {
    name: 'Blog',
    components:{
        navbar,
        ImageBanner,
        MainFooter
    },
}
</script>

<style>
.blog__grid{
    /* display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px; */
    display: flex;

}

.blog__grid > :not(:last-child){
    margin-right: 15px;
}

.blog__grid > :nth-child(1),
.blog__grid > :nth-child(3)
{
    /* display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 25px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>