package ddns.net.tracer.data.service;


import ddns.net.tracer.data.entities.LocationData;
import org.springframework.stereotype.Service;

import java.util.List;

public interface LocationDataService  {

    LocationData save(LocationData locationData);
    LocationData findOneById(long id);
    List<LocationData> findAllByTargetId(long id);
    List<LocationData> findAllByTargetIdAndDate(long id,String date);
    LocationData findOneByTargetIdAndDateAndTime(long id,String date,String time);
}
