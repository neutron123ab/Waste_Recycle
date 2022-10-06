package com.neutron.waste_recycle_backend.entity;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Repository;

@Data
@Repository
@Document("goodsInfo")
public class Demo {

    String a;

}
