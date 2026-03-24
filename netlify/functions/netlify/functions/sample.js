exports.handler = async (event, context) => {
  const functionCode = `function task(x) {
  return x * this * this;
}`;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain; charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    },
    body: functionCode
  };
};
