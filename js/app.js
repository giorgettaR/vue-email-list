const { createApp } = Vue

createApp ({
    data() {
        return {
            emails: [],
        }
    },
    methods: {
        generateEmails() {
            for (i = 0; i < 10; i++) {
                gEmails = []
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        document.createElement
                        this.emails.push(response.data.response)
                    })
            }
            console.log(this.emails)
            
        }
    }
}).mount('#app')