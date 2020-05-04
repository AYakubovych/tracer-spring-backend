package ddns.net.tracer.data.service;



import ddns.net.tracer.data.entities.User;

import java.util.List;

public interface UserService {

    List<User> findAll();
    List<User> findByName(String name);
    User save(User user);
    User findOneByEmail(String email);
    User findOneById(long id);
    User findOneByName(String name);
    Boolean existsByEmail(String email);

}
