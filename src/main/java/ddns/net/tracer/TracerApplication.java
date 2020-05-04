package ddns.net.tracer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
public class TracerApplication {

    public static void main(String[] args) {
        SpringApplication.run(TracerApplication.class, args);
    }

}
