const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const app = express();

const port = 5000;

app.use(cors());
app.use(express.json());
dotenv.config();

app.post("/api/send-email", async(req, res) => {
    const {firstname, lastname, email, subject, message} = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
        user: process.env.owner,
        pass: process.env.password
    }
    });

    const mailOptions = {
    from: email,
    to: process.env.owner,
    subject: subject,
    html: `
      <p><strong>From:</strong> ${firstname} ${lastname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
    };

    const emaildata = {
        "From : " : email,
        "To : " : process.env.owner,
        "subject : " : subject,
        "message : " : message
    };

    console.log(emaildata);

    try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
    } 
    catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ message: "Failed to send email." });
    }
});

app.listen(port, (req, res) => {
    console.log(`Server running on http://localhost:${port}`);
})



