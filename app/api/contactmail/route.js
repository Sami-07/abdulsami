import { NextRequest, NextResponse } from "next/server"
import { options, transporter } from "@/config/nodemailer"
const CONTACT_MESSAGE_FIELDS = {
    name: "Name",
    email: "Email",
 message : "Message"
}
function generateEmailContent(data) {
    const stringData = Object.entries(data).reduce((str, [key, val]) => {
        return str += `${CONTACT_MESSAGE_FIELDS[key]} : \n${val}}\n\n`
    }, "")
    const htmlData = Object.entries(data).reduce((str, [key, val]) => {
        return str += `<div class="form-row"> 
                          <h3 class="form-heading ">${CONTACT_MESSAGE_FIELDS[key]} : </h3>
                          <p class="form-answer ">${val}</p>
                       </div>`;
    }, "");

    return {
        text: stringData,
        html: `<!doctypehtml><title></title><meta charset=utf-8><meta content="width=device-width,initial-scale=1"name=viewport><meta content="IE=edge"http-equiv=X-UA-Compatible><style>.form-row{   align-items: center;display: grid;grid-template-columns: 1fr 1fr;width:80%;
          margin:auto;}.form-heading{color:#2a2a2a;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:400;font-size:16px}.form-answer{color:#2a2a2a;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:300;font-size:20px}</style><body style=margin:0!important;padding:0!important;background:#fff><div style=display:none;font-size:1px;color:#fefefe;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden></div><h2>Someone Contacted you via your website.</h2><div class=form-container>${htmlData}</div>`
    }
}
export async function POST(req, res) {
    const data = await req.json();
 
  
        if (req.method === "POST") {

            try {
                await transporter.sendMail({
                    ...options,
                    from: data.email,
                    to : process.env.EMAIL,
                    ...generateEmailContent(data),
                    subject: data.sub
                })
                return new NextResponse(JSON.stringify({ ok: true}))
            }
            catch (err) {
                return new NextResponse("Method Not sasaa Allowed", { status: 405 });
            }
        }
        else {
            return new NextResponse("Method Not sasaa Allowed", { status: 405 });
        }
   


}
