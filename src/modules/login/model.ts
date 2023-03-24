import { Schema, Types, model} from "mongoose";

const adminsSchema  = new Schema({
    id: {
        type: Types.ObjectId,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
       type: String
    },
    created_at: {
        type: Date,
        default: new Date()
    },
    updated_at: {
        type: Date,
        default: new Date()
    }
}, {
    collection: "admins"
})

export default model("Admins", adminsSchema)