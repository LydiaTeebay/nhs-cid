// onfido integration

const Onfido = require('onfido-sdk-ui')

Onfido.init({
    useModal: false,
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXlsb2FkIjoiNllTSVROd3ZadUxqZGxsKzdZL1lsOGIxQWtIZnVNWlRleVdlZVdQcEF1K2Q5WEtad2NkMXRmVVBxZDVSXG5ZWk5QRy9sa2wvRHF3ZU0xblg3K2NmZDQ2b1J0ZDRMVFV5V0lidDBDVmlORFgraDA2TmF5YW9GMlcxY09cbmNXT1dPa2poXG4iLCJ1dWlkIjoiQWNDNFV0b1FaR2ciLCJleHAiOjE1MTQ5MDM1ODJ9.-urIOZtzkRs65_VSoDxREjA3kCX5BkP5N7bWolIcSWk"',
    onComplete: function() {
        // callback for when everything is complete
        console.log("Everything is completed")
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