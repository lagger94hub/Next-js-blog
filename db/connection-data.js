const connData = {
  uri: `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.5mjjl.mongodb.net/?retryWrites=true&w=majority`,
  dbName: process.env.MONGODB_DATABASE,
};
export default connData
