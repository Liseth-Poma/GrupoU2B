const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
const TABLE = process.env.DYNAMO_TABLE;

module.exports.putItem = async (item) => {
  await dynamo
    .put({
      TableName: TABLE,
      Item: item,
    })
    .promise();
};

module.exports.getItem = (pk, sk) => {
  return dynamo
    .get({
      TableName: TABLE,
      Key: {
        PK: pk,
        SK: sk,
      },
    })
    .promise()
    .then((res) => res.Item);
};

module.exports.deleteItem = (pk, sk) => {
  return dynamo
    .delete({
      TableName: TABLE,
      Key: {
        PK: pk,
        SK: sk,
      },
    })
    .promise();
};

module.exports.queryByTipo = async (tipo) => {
  const result = await dynamo
    .scan({
      TableName: TABLE,
      FilterExpression: "#tipo = :tipoVal",
      ExpressionAttributeNames: {
        "#tipo": "Tipo",
      },
      ExpressionAttributeValues: {
        ":tipoVal": tipo,
      },
    })
    .promise();
  return result.Items;
};
