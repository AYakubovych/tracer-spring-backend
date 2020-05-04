package ddns.net.tracer.data.service;


import ddns.net.tracer.data.entities.Target;

public interface TargetService {

    Target save(Target child);
    Target findOneByName(String name);
    Target findOneById(int id);

}
