package ddns.net.tracer.web;

import com.sun.istack.NotNull;
import ddns.net.tracer.config.security.CurrentUser;
import ddns.net.tracer.config.security.UserPrincipal;
import ddns.net.tracer.data.entities.User;
import ddns.net.tracer.data.service.LocationDataService;
import ddns.net.tracer.data.service.TargetService;
import ddns.net.tracer.data.service.UserService;
import ddns.net.tracer.payloads.SubTarget;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/tracking")
public class TrackingController {

    private Logger logger = LoggerFactory.getLogger(TrackingController.class);

    private UserService userService;
    private TargetService targetService;
    private LocationDataService locationDataService;

    @GetMapping(produces = "application/json",value = "/targets")
    @PreAuthorize("hasRole('USER')")
    public List<SubTarget> subTargetsList(@CurrentUser UserPrincipal currentUser){

        User user = userService.findOneByEmail(currentUser.getEmail());

        List<SubTarget> list = new ArrayList<>();
        user.getTargets().forEach(target -> {
            list.add(new SubTarget(targetService.findOneById(target.getId())));
        });

        return list ;
    }

    @GetMapping(produces = "application/json",value = "/target/{targetIndex}/days")
    @PreAuthorize("hasRole('USER')")
    public List<String> daysList(@CurrentUser UserPrincipal currentUser,
                                 @PathVariable(required = true) int targetIndex){

        User user = userService.findOneByEmail(currentUser.getEmail());
        logger.info("User: " + user.getEmail());

        long targetId = user.getTargets().get(targetIndex).getId();

        List<String> response = new ArrayList<>();
        locationDataService.findAllByTargetId(targetId).forEach(
                (location) -> response.add(location.getDate())
        );
        return response ;
    }

    @GetMapping(produces = "application/json",value = "/target/{targetIndex}/info")
    @PreAuthorize("hasRole('USER')")
    public SubTarget targetInfo(@CurrentUser UserPrincipal currentUser,
                                @PathVariable(required = true) int targetIndex){

        User user = userService.findOneByEmail(currentUser.getEmail());
        return new SubTarget(user.getTargets().get(targetIndex));
    }

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }
    @Autowired
    public void setTargetService(TargetService targetService) {
        this.targetService = targetService;
    }
    @Autowired
    public void setLocationDataService(LocationDataService locationDataService) {
        this.locationDataService = locationDataService;
    }
}
