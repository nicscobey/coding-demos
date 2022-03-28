const me = {
    mood: "happy",
    checkMood: () => {
        console.log(this.mood)
    },
    myMood: function() {
        console.log(this.mood)
    },
}

me.checkMood()
me.myMood()


