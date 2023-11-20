const { createApp } = Vue;

const object = {
    data: function () {
        return {
            email: [],
            contatore:0
        }
    },
    methods: {
        genera() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(r => {
                if (r.data.success) {
                    this.email.push(r.data.response);
                }
            })
            this.contatore++
        }

    },

};

createApp(object).mount('#app')