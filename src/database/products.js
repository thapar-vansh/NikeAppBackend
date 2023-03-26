import { ObjectId } from 'mongodb'
import { products } from './db.js'

export const getAllProducts = async () => {
  return await products.find().toArray()
}
export const getProduct = async (id) => {
  return await products.findOne({ _id: new ObjectId(id) })
}
