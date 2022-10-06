package com.neutron.waste_recycle_backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PageInfo<T> implements Serializable {

    private Long total;  //总记录数
    private List<T> records;//分页数据
}
