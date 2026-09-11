 const video={

    title:'a',
    play(){
        console.log(this)
    }
 }
 video.stop=function(){
    console.log(this)
 }

const video2={
    title:'b',
    tags:["action", "adventure"],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title, tag)
        }, this)
    }
}
