
var SET_POWER_INTENT = "projects/handlinguserinput-mnqyaq/agent/intents/f86ba9de-4eea-49e4-80b5-cbb494d9456f";
var FAN_OFF_INTENT = "projects/handlinguserinput-mnqyaq/agent/intents/cd53e4bf-37c6-48da-8c9f-555f23772728";

function sendRequest(intentId, power) {
    let data = {
        responseId: 'N/A',
        queryResult: {
            intent: {
                name: intentId,
                displayName: 'N/A'
            },
            parameters: power ? {
                power: power
            } : null
        }
    };
    $.ajax({
        url: '/',
        type: 'POST',
        contentType: 'application/json',
        success: function() {
            console.log('Success');
        },
        data: JSON.stringify(data)
    });
}

$('#off').click(function() {
    sendRequest(FAN_OFF_INTENT);
});

$('#low').click(function() {
    sendRequest(SET_POWER_INTENT, 1);
});

$('#medium').click(function() {
    sendRequest(SET_POWER_INTENT, 2);
});

$('#high').click(function() {
    sendRequest(SET_POWER_INTENT, 3);
});
