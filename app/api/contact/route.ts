import nodemailer from "nodemailer";

export async function POST(req:Request){
    try {
        const body = await req.json();
        const {name ,email,message} = body;

        const transporter = await nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from:email,
            to:process.env.EMAIL_USER,
            subject: `Portfolio Message from ${name}`,
            text:`
            name:${name}
            email:${email}

            Message:${message} `,
        })

        return Response.json({
            sucess:true,
            message:"message sent sucessfully",
        });
    } catch (error) {
        return Response.json({
            success:false,
            message:"Something went wrong",
        },
        {status:500}
    )
    }
}