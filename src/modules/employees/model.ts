import { Schema, Types, model } from "mongoose";

const employeSchema  = new Schema({
    id: {
        type: Types.ObjectId,
        require: true
    },
    fullname: {
        type: String,
        require: true
    },
    position: {
       type: String
    },
    degree: {
        type: String
    },
    university: {
        type: String
    },
    imgUrl: {
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
    collection: "employees"
})

export default model("Employees", employeSchema)