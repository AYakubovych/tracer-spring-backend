package ddns.net.tracer.data.service;

import ddns.net.tracer.data.entities.BindingKey;
import ddns.net.tracer.data.repository.BindingKeyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BindingKeyServiceImpl implements BindingKeyService {

    private BindingKeyRepository bindingKeyRepository;

    @Override
    public BindingKey save(BindingKey bindingKey) {
        return bindingKeyRepository.save(bindingKey);
    }

    @Override
    public BindingKey findOneById(long id) {
        return bindingKeyRepository.findOneById(id);
    }

    @Override
    public BindingKey findOneByKey(String key) {
        return bindingKeyRepository.findOneByKey(key);
    }

    @Override
    public void delete(BindingKey bindingKey) {
        bindingKeyRepository.delete(bindingKey);
    }

    @Autowired
    public void setBindingKeyRepository(BindingKeyRepository bindingKeyRepository) {
        this.bindingKeyRepository = bindingKeyRepository;
    }
}
