package ddns.net.tracer.payloads;

import ddns.net.tracer.data.entities.LocationData;

public class LocationResponse {

    private double longitude;

    private double latitude;

    public LocationResponse(LocationData locationData){
        this.latitude = locationData.getLatitude();
        this.longitude = locationData.getLongitude();
    }

    public LocationResponse(){}

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }
}
