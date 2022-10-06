package com.neutron.waste_recycle_backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Openid {

    private String openid;
    private String session_key;
}
