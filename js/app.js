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
                        gEmails.push(response.data.response)
                        if (gEmails.length == 10) {
                            for (i = 0; i < 10; i++) {
                                this.emails.push(gEmails[i])
                            }
                        }
                    })
            }
            console.log(this.emails)
            
        }
    }
}).mount('#app')