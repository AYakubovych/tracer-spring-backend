package ddns.net.tracer.web;

import ddns.net.tracer.payloads.ApiResponse;
import ddns.net.tracer.payloads.FeedBackRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import javax.validation.Valid;

/**
 * This controller is based on RestTemplate call and will not work
 * if it does not receive a response from mailing service
 */
@RestController
@RequestMapping("/mailing")
public class FeedBackController {

    @Value("${mailing.service.url}")
    private String MAILING_URL;

    private final String FEEDBACK_ROUTING = "feedback/";

    private Logger logger = LoggerFactory.getLogger(FeedBackController.class);

    @PostMapping(path = "/feedback", produces = "application/json")
    public ResponseEntity<?> feedBack(@Valid @RequestBody FeedBackRequest feedBackRequest) {

        RestTemplate restTemplate = new RestTemplate();
        try {

            Boolean isDelivered = restTemplate.postForObject(
                    MAILING_URL + FEEDBACK_ROUTING,
                    feedBackRequest,
                    Boolean.class);

            if (isDelivered) {
                logger.info("Mail sended");
            } else {
                logger.info("Mail not sended");
            }

        } catch (Exception e) {
            logger.error("Error while mail sending: " + e.getMessage());

            return new ResponseEntity(new ApiResponse(false,
                    "Message not sended"),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity(new ApiResponse(true,
                "Message received!"),
                HttpStatus.OK);
    }
}
