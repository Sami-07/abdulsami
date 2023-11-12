import nodemailer from "nodemailer"
export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:
    {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
    }
})
export const options = {
    from: process.env.EMAIL,
    to: process.env.EMAIL
}