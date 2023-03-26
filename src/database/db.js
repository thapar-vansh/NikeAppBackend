import { MongoClient } from 'mongodb'

const uri =
  'mongodb+srv://thaparvansh29:yeYcAlFcr8DzFLSY@cluster0.mj4umq6.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri)
const database = client.db('NikeCloneDB')
export const products = database.collection('products')
export const orders = database.collection('orders');
