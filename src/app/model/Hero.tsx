import mongoose ,{Schema, mongo} from 'mongoose'



const schemaBluero = new Schema(
    {   heroTitle:String,
        heroContent:String


    },
    {
        timestamps:true
    }
)



const hero = mongoose.models.hero || mongoose.model('hero',schemaBluero)

export default hero