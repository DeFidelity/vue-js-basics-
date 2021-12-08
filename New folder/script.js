const app = Vue.createApp({
    // template: '<h2>Hello World!</h2>'
    data(){
        return {
            showBooks: true,
            title: 'my name',
            author: 'sanderson',
            age: 45,
            x: 0, 
            y:0,
            books: [
                {title: 'the boy', author: 'myself 1',isFav: true},
                {title: 'the lady',author: 'my friend', isFav: false},
                {title: 'the man', author: 'my lady', isFav: true},
            ],
            url: 'https://v3.vuejs.org/guide/installation.html#vue-devtools'
        }
    },
    methods: {
        changeTitle(){
            this.title = 'whateve it works'
        },
        changeAuthor(author){
            this.author = author
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e,data){
            console.log(e,e.type)
            if (data){
                console.log(data);
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book){
            book.isFav =!book.isFav
        }
    },
    computed:{
        filteredBooks(){
            return this.books.filter((book)=> book.isFav
            ) 
        }
    }
})

app.mount('#app')