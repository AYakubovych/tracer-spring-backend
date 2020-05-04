package ddns.net.tracer.data.repository;


import ddns.net.tracer.data.entities.Target;
import org.springframework.data.repository.CrudRepository;


public interface TargetRepository extends CrudRepository<Target,Integer> {

    Target findOneByName(String name);
    Target findOneById(int id);

}
