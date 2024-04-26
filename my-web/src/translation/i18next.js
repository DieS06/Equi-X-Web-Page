import i18next from 'i18next'

i18next.init({
    lng: 'es',
        resources:{
            es:{
                translation: {
                    key: 'ES'
                }
            }
        },
            en:{
                translation: {
                    key: 'EN'
                }
            }

})

console.log(i18next.t('key'))