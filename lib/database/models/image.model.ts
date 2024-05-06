import { Schema, model, models } from "mongoose";

export interface IImage extends Document {
    _id: string;
    title: string;
    transformationTypes: string;
    publicId: string;
    secureURL: URL;
    width?: number;
    height?: number;
    config?: object;
    transformationUrl?: string;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author: {
        _id: string;
        firstName: string;
        lastName: string;
    }
    createdAt: Date;
    updatedAt: Date;
}

const ImageSchema = new Schema ({
    _id: { type: String, required: true },
    title: { type: String, required: true },
    transformationTypes : { type: String, required: true },
    publicId: { type: String, required: true },
    secureURL: { type: URL, required: true} ,
    width: { type: Number },
    height: { type: Number },
    config: { type: Object },
    transformationUrl: { type: URL },
    aspectRatio: { type:Number },
    color: { type: String },
    prompt: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now}

});

const Image = models?.Image || model('Image', ImageSchema);

export default Image;