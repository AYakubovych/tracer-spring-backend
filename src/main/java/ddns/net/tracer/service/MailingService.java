package ddns.net.tracer.service;

import ddns.net.tracer.payloads.FeedBackRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailingService {

    private JavaMailSender javaMailSender;

    public void sendMail(FeedBackRequest request) throws MailException {
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo("a.yakubovych@yahoo.com");
        mail.setFrom(request.getEmail());
        mail.setSubject("Feedback");
        mail.setText(request.getMessage() +
                '\n' + '\n' +
                request.getName() +
                '\n' +
                request.getEmail());

        javaMailSender.send(mail);
    }

    @Autowired
    public void setJavaMailSender(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }
}
