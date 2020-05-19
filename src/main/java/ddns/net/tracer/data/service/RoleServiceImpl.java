package ddns.net.tracer.data.service;

import ddns.net.tracer.data.entities.Role;
import ddns.net.tracer.data.entities.RoleName;
import ddns.net.tracer.data.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public class RoleServiceImpl implements RoleService {

    private RoleRepository roleRepository;

    @Transactional(readOnly = true)
    @Override
    public Optional<Role> findByRole(RoleName role) {
        return roleRepository.findByRole(role);
    }

    @Autowired
    public void setRoleRepository(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }
}
