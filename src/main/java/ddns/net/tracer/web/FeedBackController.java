package ddns.net.tracer.web;

import ddns.net.tracer.payloads.ApiResponse;
import ddns.net.tracer.payloads.FeedBackRequest;
import ddns.net.tracer.service.MailingService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;

@RestController
@RequestMapping("/mailing")
public class FeedBackController {

    private MailingService mailingService;

    private Logger logger = LoggerFactory.getLogger(FeedBackController.class);

    @PostMapping(path="/feedback", produces = "application/json")
    public ResponseEntity<?> feedBack(@Valid @RequestBody FeedBackRequest feedBackRequest){

        try{

            mailingService.sendMail(feedBackRequest);
            logger.info("Mail sended");

        }catch (MailException e){

            logger.error("Error while mail sending: " + e.getMessage());

            return new ResponseEntity(new ApiResponse(false,
                    "Message not sended"),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity(new ApiResponse(true,
                "Message received!"),
                HttpStatus.OK);
    }

    @Autowired
    public void setMailingService(MailingService mailingService) {
        this.mailingService = mailingService;
    }
}
