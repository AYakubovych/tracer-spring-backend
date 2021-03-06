package ddns.net.tracer.payloads;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import ddns.net.tracer.data.entities.Target;

/*
* This class usefull to protect Target.class password
* */
@JsonSerialize
public class SubTarget {

    private long id;
    private String name;
    private String lastName;
    private String email;
    private String phone;

    public SubTarget(Target target){
        this.id = target.getId();
        this.name = target.getName();
        this.lastName = target.getSurname();
        this.email = target.getEmail();
        this.phone = target.getPhone();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
