const awsExports = {
  aws_appsync_graphqlEndpoint: import.meta.env.VITE_APPSYNC_URL,
  aws_appsync_region: import.meta.env.VITE_AWS_REGION,
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: import.meta.env.VITE_APPSYNC_API_KEY,
};

export default awsExports;