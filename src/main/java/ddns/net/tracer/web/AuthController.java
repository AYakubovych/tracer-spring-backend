package ddns.net.tracer.web;

import ddns.net.tracer.config.security.jwt.JwtTokenProvider;
import ddns.net.tracer.payloads.ApiResponse;
import ddns.net.tracer.payloads.JwtAuthenticationResponse;
import ddns.net.tracer.payloads.SignInRequest;
import ddns.net.tracer.payloads.SignUpRequest;
import ddns.net.tracer.data.entities.Role;
import ddns.net.tracer.data.entities.RoleName;
import ddns.net.tracer.data.entities.User;
import ddns.net.tracer.data.service.RoleService;
import ddns.net.tracer.data.service.UserService;
import ddns.net.tracer.util.exceptions.AppException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.Collections;

@RestController
@RequestMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
public class AuthController {

    private static Logger logger = LoggerFactory.getLogger(AuthController.class);

    private AuthenticationManager authenticationManager;

    private UserService userService;
    private RoleService roleService;

    private PasswordEncoder passwordEncoder;
    private JwtTokenProvider tokenProvider;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody SignInRequest signInRequest) {

        logger.info("Authentication for " + signInRequest.getEmail());

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        signInRequest.getEmail(),
                        signInRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = tokenProvider.generateToken(authentication);

        logger.info("JWT for " + signInRequest.getEmail() + " created and sended");

        return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {

        logger.info("SignUp for " + signUpRequest.getEmail());

        logger.info("mail check");
        if(userService.existsByEmail(signUpRequest.getEmail())) {
            return new ResponseEntity(new ApiResponse(false, "Email Address already in use!"),
                    HttpStatus.BAD_REQUEST);
        }

        // Creating user's account
        User user = new User(signUpRequest.getName(), signUpRequest.getLastName(),
                signUpRequest.getEmail(), signUpRequest.getPassword());

        user.setPass(passwordEncoder.encode(user.getPass()));
        logger.info(roleService.findByRole(RoleName.ROLE_USER).toString());
        Role userRole = roleService.findByRole(RoleName.ROLE_USER)
                .orElseThrow(() -> new AppException("User Role not set."));

        //authorities table check
        if(userRole == null){
            logger.error("No authorities founded");
            return new ResponseEntity<>(new ApiResponse(false,"Authorities not founded"),
                    HttpStatus.BAD_REQUEST);
        }

        user.setRoles(Collections.singleton(userRole));

        User result = userService.save(user);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/")
                .buildAndExpand(result.getId()).toUri();
        logger.info("Account created for " + user.getEmail());

        return ResponseEntity.created(location).body(new ApiResponse(true, "User registered successfully"));
    }

    @Autowired
    public void setAuthenticationManager(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }
    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }
    @Autowired
    public void setRoleService(RoleService roleService) {
        this.roleService = roleService;
    }
    @Autowired
    public void setPasswordEncoder(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }
    @Autowired
    public void setTokenProvider(JwtTokenProvider tokenProvider) {
        this.tokenProvider = tokenProvider;
    }
}
