import { Schema, Types, model} from "mongoose";

const filesSchema  = new Schema({
    id: {
        type: Types.ObjectId,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    uploadName: {
       type: String
    },
    url: {
        type: String
    },
    downloadUrl: {
        type: String
    },
    size: {
        type: String
    },
    type: {
        type: String
    },
    created_at: {
        type: Date,
        default: new Date()
    }
}, {
    collection: "files"
})

export default model("Files", filesSchema)