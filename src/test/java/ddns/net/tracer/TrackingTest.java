package ddns.net.tracer;

import com.fasterxml.jackson.databind.ObjectMapper;
import ddns.net.tracer.data.entities.User;
import ddns.net.tracer.data.service.UserService;
import ddns.net.tracer.payloads.SignInRequest;
import ddns.net.tracer.payloads.SignUpRequest;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.web.servlet.MockMvc;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class TrackingTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private UserService userService;

    @Autowired
    private ObjectMapper mapper;

    @Autowired
    private PasswordEncoder encoder;

    @Test
    void testRegistrationNoNameFail() throws Exception{

        String name = "";
        String lastName = "Yakubovych";
        String email = "a.yakubovych@yahoo.com";
        String password = "qweqwe";

        SignUpRequest request = new SignUpRequest(name, lastName, email, password);

        mockMvc.perform(
                post("/signup")
                        .contentType("application/json")
                        .content(mapper.writeValueAsString(request))
        ).andExpect(status().isBadRequest());
    }

    @Test
    void testRegistrationNoLastNameFail() throws Exception{

        String name = "Anton";
        String lastName = "";
        String email = "a.yakubovych@yahoo.com";
        String password = "qweqwe";

        SignUpRequest request = new SignUpRequest(name, lastName, email, password);

        mockMvc.perform(
                post("/signup")
                        .contentType("application/json")
                        .content(mapper.writeValueAsString(request))
        ).andExpect(status().isBadRequest());
    }

    @Test
    void testRegistrationNoEmailFail() throws Exception{

        String name = "Anton";
        String lastName = "Yakubovych";
        String email = "";
        String password = "qweqwe";

        SignUpRequest request = new SignUpRequest(name, lastName, email, password);

        mockMvc.perform(
                post("/signup")
                        .contentType("application/json")
                        .content(mapper.writeValueAsString(request))
        ).andExpect(status().isBadRequest());
    }

    @Test
    void testRegistrationNoPassFail() throws Exception{

        String name = "Anton";
        String lastName = "Yakubovych";
        String email = "a.yakubovych@yahoo.com";
        String password = "";

        SignUpRequest request = new SignUpRequest(name, lastName, email, password);

        mockMvc.perform(
                post("/signup")
                        .contentType("application/json")
                        .content(mapper.writeValueAsString(request))
        ).andExpect(status().isBadRequest());
    }

    @Test
    void testRegistrationShortPassFail() throws Exception{

        String name = "Anton";
        String lastName = "Yakubovych";
        String email = "a.yakubovych@yahoo.com";
        String password = "qwe";

        SignUpRequest request = new SignUpRequest(name, lastName, email, password);

        mockMvc.perform(
                post("/signup")
                        .contentType("application/json")
                        .content(mapper.writeValueAsString(request))
        ).andExpect(status().isBadRequest());
    }

    @Test
    void testRegistrationLongPassFail() throws Exception{

        String name = "Anton";
        String lastName = "Yakubovych";
        String email = "a.yakubovych@yahoo.com";
        String password = "qweqwasdasdasdasdasde";

        SignUpRequest request = new SignUpRequest(name, lastName, email, password);

        mockMvc.perform(
                post("/signup")
                        .contentType("application/json")
                        .content(mapper.writeValueAsString(request))
        ).andExpect(status().isBadRequest());
    }

    @Test
    void testRegistration() throws Exception{

        String name = "Anton";
        String lastName = "Yakubovych";
        String email = "a.yakubovych@yahoo.com";
        String password = "qweqwe";

        SignUpRequest request = new SignUpRequest(name, lastName, email, password);

        mockMvc.perform(
                post("/signup")
                .contentType("application/json")
                .content(mapper.writeValueAsString(request))
        ).andExpect(status().isCreated());

        User user = userService.findOneByEmail(email);
        assertEquals(user.getEmail(),email);

    }

    @Test
    void testRegistrationEmailBusyFail() throws Exception{

        String name = "Anton";
        String lastName = "Yakubovych";
        String email = "a.yakubovych@yahoo.com";
        String password = "qweqwe";

        SignUpRequest request = new SignUpRequest(name, lastName, email, password);

        mockMvc.perform(
                post("/signup")
                        .contentType("application/json")
                        .content(mapper.writeValueAsString(request))
        ).andExpect(status().isBadRequest());
    }

    @Test
    public void testSignIn() throws Exception {

        String email = "a.yakubovych@yahoo.com";
        String password = "qweqwe";

        mockMvc.perform(
                post("/login")
                        .contentType("application/json")
                        .content(mapper.writeValueAsString(
                                new SignInRequest(email, password))))
                .andExpect(status().isOk());

        User user = userService.findOneByEmail(email);

        assertTrue(encoder.matches(
                password,
                user.getPass())
        );
    }

    @Test
    public void testSingInFail() throws Exception{
        String email = "zzz@zzz.com";
        String password = "qweqwe";

        mockMvc.perform(
                post("/login")
                        .contentType("application/json")
                        .content(mapper.writeValueAsString(
                                new SignInRequest(email, password))))
                .andExpect(status().isUnauthorized());
    }

    @Test
    public void testSingInNoMailFail() throws Exception{

        String email = "";
        String password = "qweqwe";

        mockMvc.perform(
                post("/login")
                        .contentType("application/json")
                        .content(mapper.writeValueAsString(
                                new SignInRequest(email, password))))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void testSingInNoPassFail() throws Exception{

        String email = "a.yakubovych@yahoo.com";
        String password = "";

        mockMvc.perform(
                post("/login")
                        .contentType("application/json")
                        .content(mapper.writeValueAsString(
                                new SignInRequest(email, password))))
                .andExpect(status().isBadRequest());
    }




}
