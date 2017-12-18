// onfido integration

const Onfido = require('onfido-sdk-ui')

Onfido.init({
    useModal: false,
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXlsb2FkIjoiNllTSVROd3ZadUxqZGxsKzdZL1lsOGIxQWtIZnVNWlRleVdlZVdQcEF1K2Q5WEtad2NkMXRmVVBxZDVSXG5ZWk5QQTRiakVUVWcwRmJYOUNkMWpuN2l6UlVnTzhDbGFPOC9ueHNGRnlObjllZWlZazZkelZyVk1IZE5cbmFQcFZOb3dSXG4iLCJ1dWlkIjoiQWNDNFV0b1FaR2ciLCJleHAiOjE1MTMxODkxNDh9.v3eXYSjiQf_fY5F-dbtd9od-x3hAcgERStcU2Sh68P4',
    onComplete: function() {
        // callback for when everything is complete
        console.log("Everything is complete")
    },
    steps: [
        {
            type:'welcome',
            options:{
                title:'Prove your identity',
                nextButton:'Start'
            }
        },
        'document',
        'face',
        'complete'
    ]
})