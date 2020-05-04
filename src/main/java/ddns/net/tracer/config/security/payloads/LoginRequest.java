package ddns.net.tracer.config.security.payloads;

import javax.validation.constraints.NotBlank;

public class LoginRequest {
    @NotBlank
    private String userEmail;

    @NotBlank
    private String userPassword;

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }
}
