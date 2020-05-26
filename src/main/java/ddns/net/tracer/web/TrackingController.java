package ddns.net.tracer.web;

import ddns.net.tracer.config.security.CurrentUser;
import ddns.net.tracer.config.security.UserPrincipal;
import ddns.net.tracer.data.entities.LocationData;
import ddns.net.tracer.data.entities.User;
import ddns.net.tracer.data.service.LocationDataService;
import ddns.net.tracer.data.service.TargetService;
import ddns.net.tracer.data.service.UserService;
import ddns.net.tracer.payloads.LocationResponse;
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

    @GetMapping(produces = "application/json",value = "/target/info/{targetIndex}")
    @PreAuthorize("hasRole('USER')")
    public SubTarget targetInfo(@CurrentUser UserPrincipal currentUser,
                                @PathVariable(required = true) int targetIndex){

        User user = userService.findOneByEmail(currentUser.getEmail());
        return new SubTarget(user.getTargets().get(targetIndex));
    }

    @GetMapping(produces = "application/json",value = "/target/days/{targetIndex}")
    @PreAuthorize("hasRole('USER')")
    public List<String> daysList(@CurrentUser UserPrincipal currentUser,
                                 @PathVariable(required = true) int targetIndex){

        logger.info("Creating days list for user: " + currentUser.getEmail());
        User user = userService.findOneByEmail(currentUser.getEmail());

        long targetId = user.getTargets().get(targetIndex).getId();

        List<String> response = new ArrayList<>();
        locationDataService.findAllByTargetId(targetId).forEach(
                (location) -> response.add(location.getDate())
        );

        logger.info("Days list send for user: " + currentUser.getEmail());
        return response ;
    }

    @GetMapping(produces = "application/json",value = "/target/times/{targetIndex}/{day}")
    @PreAuthorize("hasRole('USER')")
    public List<String> timesList(@CurrentUser UserPrincipal currentUser,
                                  @PathVariable(required = true) int targetIndex,
                                  @PathVariable(required = true) String day){

        logger.info("Creating times list for user: " + currentUser.getEmail());
        User user = userService.findOneByEmail(currentUser.getEmail());

        long targetId = user.getTargets().get(targetIndex).getId();

        List<String> response = new ArrayList<>();
        locationDataService.findAllByTargetIdAndDate(targetId,day).forEach(
                (location) -> response.add(location.getTime())
        );

        logger.info("Times list send for user: " + currentUser.getEmail());
        return response ;
    }


    @GetMapping(produces = "application/json",value = "/target/{index}/{day}/{time}")
    @PreAuthorize("hasRole('USER')")
    public LocationResponse locationData(@CurrentUser UserPrincipal currentUser,
                                         @PathVariable(required = true) int index,
                                         @PathVariable(required = true) String day,
                                         @PathVariable(required = true) String time){

        logger.info("Creating LocationResponse for: " + currentUser.getEmail());

        User user = userService.findOneByEmail(currentUser.getEmail());
        long targetId = user.getTargets().get(index).getId();

        logger.info("Sending LocationResponse for:" + user.getEmail());

        return new LocationResponse(locationDataService.findOneByTargetIdAndDateAndTime(targetId,day,time));
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
