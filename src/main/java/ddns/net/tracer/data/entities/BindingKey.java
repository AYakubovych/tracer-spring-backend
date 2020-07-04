package ddns.net.tracer.data.entities;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "binding_key")
public class BindingKey implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private long id;

    @Column
    private String key;

    @OneToOne(mappedBy = "bindingKey")
    private Target target;

    public BindingKey() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public Target getTarget() {
        return target;
    }

    public void setTarget(Target target) {
        this.target = target;
    }
}
