import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "BoJack Horseman <onboarding@resend.dev>",
      to: ["pavansarquislautaro@gmail.com"],
      subject: `Nuevo mensaje: ${subject}`,
      replyTo: email,
      text: `
Nombre: ${name}
Email: ${email}

Mensaje:
${message}
      `,
    });

    if (error) {
      console.error(error);

      return Response.json(
        { error: "No se pudo enviar el mensaje." },
        { status: 500 }
      );
    }

    return Response.json({
      message: "Mensaje enviado correctamente.",
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Ocurrió un error al procesar el mensaje." },
      { status: 500 }
    );
  }
}