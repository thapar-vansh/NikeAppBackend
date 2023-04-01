import { MongoClient } from 'mongodb'

let client

export const getDb = () => {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URI)
  }
  const database = client.db('NikeCloneDB')
  const products = database.collection('products')
  const orders = database.collection('orders')
  return { products, orders }
}
