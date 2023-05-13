// import sendgrid from "@sendgrid/mail";

// sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

// const handler = async (req, res) => {
//   if (req.method !== "POST") return;

//   const { email, message, subject } = req.body;

//   if (!email.trim() || !message.trim() || !subject.trim()) {
//     return res.status(400).json({ error: "All fields must be filled!" });
//   }

//   if (!email.includes("@") || !email.includes(".")) {
//     return res.status(400).json({ error: "Email must be valid!" });
//   }

//   try {
//     await sendgrid.send({
//       to: "rossen1991@gmail.com",
//       from: "rossen1991@abv.bg",
//       subject,
//       html: `<h2>You have a message from: ${email}</h2><br><h3>Subject: ${subject}</h3><br><p>${message}</p>`,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(error.statusCode || 500).json({ error: error.message });
//   }

//   return res.status(200).json({ error: "" });
// };

// export default handler;
