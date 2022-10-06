package com.neutron.waste_recycle_backend.service;

import com.neutron.waste_recycle_backend.entity.GoodsInfo;

import java.util.List;

public interface QueryUserSailedService {

    public List<GoodsInfo> getGoodsUserSailedAscByTime(String openid);
}
