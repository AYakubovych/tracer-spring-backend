package ddns.net.tracer.web;


import ddns.net.tracer.config.security.CurrentUser;
import ddns.net.tracer.config.security.UserPrincipal;
import ddns.net.tracer.data.entities.BindingKey;
import ddns.net.tracer.data.entities.Target;
import ddns.net.tracer.data.entities.User;
import ddns.net.tracer.data.service.BindingKeyService;
import ddns.net.tracer.data.service.TargetService;
import ddns.net.tracer.data.service.UserService;
import ddns.net.tracer.payloads.ApiResponse;
import ddns.net.tracer.payloads.LoginRequest;
import ddns.net.tracer.payloads.UserData;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping("/profile")
public class ProfileController {

    private Logger logger = LoggerFactory.getLogger(ProfileController.class);

    private UserService userService;
    private TargetService targetService;
    private BindingKeyService bindingKeyService;

    @GetMapping(produces = "application/json")
    @PreAuthorize("hasRole('USER')")
    public UserData profile(@CurrentUser UserPrincipal currentUser){

        logger.info("Creating user data for: " + currentUser.getEmail());
        User user = userService.findOneByEmail(currentUser.getEmail());

        return new UserData(user.getName(),user.getLast_name(),user.getEmail());
    }


    @PostMapping(path="/add/target", produces = "application/json")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> addTarget(@CurrentUser UserPrincipal currentUser,@RequestBody String key){

        logger.info("Adding target for user : " + currentUser.getEmail());

        BindingKey bindingKey = bindingKeyService.findOneByKey(key);

        Target target = bindingKey.getTarget();

        if(target == null){
            logger.error("No such target");
            return new ResponseEntity(new ApiResponse(false, "No such target"),
                    HttpStatus.BAD_REQUEST);
        }

        User user = userService.findOneByEmail(currentUser.getEmail());

        if(user.getTargets().contains(target)){
            logger.error("Already tracking that target");
            return new ResponseEntity(new ApiResponse(false, "Already tracked"),
                    HttpStatus.BAD_REQUEST);
        }

        user.getTargets().add(target);
        userService.save(user);

        logger.info("Creating response for user: " + currentUser.getEmail());
        return new ResponseEntity(new ApiResponse(true, "All ok"),
                HttpStatus.OK);
    }

    @Autowired
    public void setBindingKeyService(BindingKeyService bindingKeyService) {
        this.bindingKeyService = bindingKeyService;
    }

    @Autowired
    public void setTargetService(TargetService targetService) {
        this.targetService = targetService;
    }

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }
}
