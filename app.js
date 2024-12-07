const AWS = require('aws-sdk');
const s3 = new AWS.S3();

AWS.config.update({
    region: 'eu-west-1'
});

const transaction = {
    sender: "Hamza",
    receiver: "Someone",
    amount: 50
};

const params = {
    Bucket: 'hamzaniaz-blockchain-logs',
    Key: 'transaction.json',
    Body: JSON.stringify(transaction)
};

s3.putObject(params, (err, data) => {
    if (err) {
        console.error("Failed to save data to S3:", err);
    } else {
        console.log("Transaction saved successfully to S3:", data);
    }
});