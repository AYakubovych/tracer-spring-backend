package ddns.net.tracer.data.service;

import ddns.net.tracer.data.entities.Role;
import ddns.net.tracer.data.entities.RoleName;
import org.springframework.stereotype.Service;

import java.util.Optional;

public interface RoleService {
    Optional<Role> findByRole(RoleName role);
}
