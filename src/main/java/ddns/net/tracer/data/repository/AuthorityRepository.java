package ddns.net.tracer.data.repository;

import ddns.net.tracer.data.entities.Authorities;
import ddns.net.tracer.data.entities.AuthoritiesName;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AuthorityRepository extends CrudRepository<Authorities, Long> {

    Optional<Authorities> findByAuthority(AuthoritiesName authoritiesName);
}
