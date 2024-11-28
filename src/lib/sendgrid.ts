import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

/**
 * Sends an email using SendGrid.
 * @param msg - The email message object.
 */
export const sendEmail = async (msg: {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}) => {
  try {
    await sgMail.send({
      ...msg,
      content: [
        {
          type: msg.html ? 'text/html' : 'text/plain',
          value: msg.html || msg.text || '',
        },
      ],
    });
    console.log("Email sent successfully");
  } catch (error: any) {
    console.error("Failed to send email:", error.response?.body || error.message);
    throw new Error("Email sending failed");
  }
};
