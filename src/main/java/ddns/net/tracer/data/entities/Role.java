package ddns.net.tracer.data.entities;


import org.hibernate.annotations.NaturalId;

import javax.persistence.*;

@Entity
@Table(name = "roles")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    long id;

    @Enumerated(EnumType.STRING)
    @NaturalId
    @Column(name = "role")
    private RoleName role;

    public RoleName getAuthorities() {
        return role;
    }

    public void setAuthority(RoleName role) {
        this.role = role;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public RoleName getAuthority() {
        return role;
    }
}
