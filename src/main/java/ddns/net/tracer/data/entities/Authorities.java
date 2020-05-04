package ddns.net.tracer.data.entities;


import org.hibernate.annotations.NaturalId;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;

@Entity
@Table(name = "authorities")
public class Authorities implements GrantedAuthority{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    long id;

    @Enumerated(EnumType.STRING)
    @NaturalId
    @Column(name = "authority")
    private AuthoritiesName authority;

    public AuthoritiesName getAuthorities() {
        return authority;
    }

    public void setAuthority(AuthoritiesName authority) {
        this.authority = authority;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Override
    public String getAuthority() {
        return authority.toString();
    }
}
