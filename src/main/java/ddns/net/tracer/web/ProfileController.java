package ddns.net.tracer.web;


import ddns.net.tracer.config.security.CurrentUser;
import ddns.net.tracer.config.security.UserPrincipal;
import ddns.net.tracer.data.entities.User;
import ddns.net.tracer.data.service.UserService;
import ddns.net.tracer.payloads.UserData;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/profile")
public class ProfileController {

    private Logger logger = LoggerFactory.getLogger(ProfileController.class);

    private UserService userService;

    @GetMapping(produces = "application/json")
    @PreAuthorize("hasRole('USER')")
    public UserData profile(@CurrentUser UserPrincipal currentUser){

        logger.info("Creating user data for: " + currentUser.getEmail());
        User user = userService.findOneByEmail(currentUser.getEmail());

        return new UserData(user.getName(),user.getLast_name(),user.getEmail());
    }

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }
}
