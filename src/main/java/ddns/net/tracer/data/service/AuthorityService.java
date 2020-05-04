package ddns.net.tracer.data.service;

import ddns.net.tracer.data.entities.Authorities;
import ddns.net.tracer.data.entities.AuthoritiesName;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface AuthorityService {
    Optional<Authorities> findByAuthority(AuthoritiesName authoritiesName);
}
