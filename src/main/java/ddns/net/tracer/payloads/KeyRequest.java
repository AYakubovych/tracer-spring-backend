package ddns.net.tracer.payloads;

import javax.validation.constraints.NotBlank;

public class KeyRequest {

    @NotBlank
    private String key;

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }
}

