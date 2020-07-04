package ddns.net.tracer.data.service;

import ddns.net.tracer.data.entities.BindingKey;

public interface BindingKeyService {

    BindingKey save(BindingKey bindingKey);
    BindingKey findOneById(long id);
    BindingKey findOneByKey(String key);
    void delete(BindingKey bindingKey);
}
