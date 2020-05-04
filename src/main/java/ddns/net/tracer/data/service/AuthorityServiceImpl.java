package ddns.net.tracer.data.service;

import ddns.net.tracer.data.entities.Authorities;
import ddns.net.tracer.data.entities.AuthoritiesName;
import ddns.net.tracer.data.repository.AuthorityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public class AuthorityServiceImpl implements AuthorityService {

    private AuthorityRepository authorityRepository;

    @Transactional(readOnly = true)
    @Override
    public Optional<Authorities> findByAuthority(AuthoritiesName authoritiesName) {
        return authorityRepository.findByAuthority(authoritiesName);
    }

    @Autowired
    public void setAuthorityRepository(AuthorityRepository authorityRepository) {
        this.authorityRepository = authorityRepository;
    }
}
