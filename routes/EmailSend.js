var nodemailer = require("nodemailer");

var dynamicEmail = function(email, code) {
    console.log(email, code)
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'youthcodeapp@gmail.com',
            pass: 'YouthCodeApp1'
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        },
    });
    // Step 2
    let mailOptions = {
        from: 'Notifications" <ExpoApp@gmail.com>',
        to: email,
        subject: 'You got a verification code by Expo.com',
        html: "<b style='color:#33b17d;font-size:17px'>" +
            "</b>,<br> Your email verification code is :- <b style='color:grey;font-size:17px;margin-left:30px'>" +
            code +
            '</b>',
    };

    //   Step 3
    // transporter.sendMail(mailOptions, function(error, info) {
    //     if (error) {
    //         res.send(error);
    //     } else {
    //         res.json({ message: "msg sent successfully", data: info.accepted });

    //     }
    // });
    transporter.sendMail(mailOptions, function(err, info) {
        if (err) console.log(err);
        else console.log("email sent successfully");
    });
};

module.exports = { dynamicEmail };