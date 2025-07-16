import dotenv from "dotenv"

dotenv.config()

const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME
const AWS_BUCKET_REGION = process.env.AWS_BUCKET_REGION
const AWS_PUBLIC_KEY = process.env.AWS_PUBLIC_KEY
const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY


console.log(AWS_BUCKET_NAME)
console.log(AWS_BUCKET_REGION)
console.log(AWS_PUBLIC_KEY)
console.log(AWS_SECRET_KEY)
