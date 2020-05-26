package ddns.net.tracer.data.repository;


import ddns.net.tracer.data.entities.LocationData;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LocationDataRepository extends CrudRepository<LocationData, Long> {

    LocationData findOneById(long id);
    List<LocationData> findAllByTargetId(long id);
    List<LocationData> findAllByTargetIdAndDate(long id,String date);
    LocationData findOneByTargetIdAndDateAndTime(long id,String date,String time);

}
