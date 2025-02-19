import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})
  
const AccountModel = mongoose.model("accounts", AccountSchema)
export default AccountModel