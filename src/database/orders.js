import { orders } from './db.js'

export const getOrder = async (ref) => {
  return await orders.findOne({ ref })
}

export const createOrder = async (order) => {
  const result = await orders.insertOne(order)
  return { ...order, _id: result.insertedId }
}
