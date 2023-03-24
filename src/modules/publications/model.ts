import { Schema, Types, model} from "mongoose";

const publicationSchema  = new Schema({
    id: {
        type: Types.ObjectId,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    desc: {
       type: String
    },
    imgUrl: {
        type: String
    },
    fileUrl: {
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
    collection: "publications"
})

export default model("Publications", publicationSchema)