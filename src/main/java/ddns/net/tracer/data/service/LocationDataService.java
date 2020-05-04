package ddns.net.tracer.data.service;


import ddns.net.tracer.data.entities.LocationData;

import java.util.List;

public interface LocationDataService  {

    LocationData save(LocationData locationData);
    LocationData findOneById(long id);
    List<LocationData> findAllByChildId(int id);

}
