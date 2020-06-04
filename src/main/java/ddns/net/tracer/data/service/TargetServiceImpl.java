package ddns.net.tracer.data.service;


import ddns.net.tracer.data.entities.Target;
import ddns.net.tracer.data.repository.TargetRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class TargetServiceImpl implements TargetService {

    private static Logger logger = LoggerFactory.getLogger(TargetServiceImpl.class);


    private TargetRepository targetRepository;

    @Transactional
    @Override
    public Target save(Target child){
        return targetRepository.save(child);
    }

    @Transactional(readOnly = true)
    @Override
    public Target findOneByName(String name){
        return targetRepository.findOneByName(name);
    }

    @Transactional(readOnly = true)
    @Override
    public Target findOneById(long id){
        return targetRepository.findOneById(id);
    }

    @Autowired
    public void setTargetRepository(TargetRepository targetRepository) {
        this.targetRepository = targetRepository;
    }
}
