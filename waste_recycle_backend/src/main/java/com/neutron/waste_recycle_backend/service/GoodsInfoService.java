package com.neutron.waste_recycle_backend.service;

import com.neutron.waste_recycle_backend.entity.GoodsInfo;
import com.neutron.waste_recycle_backend.entity.PageInfo;

import java.util.List;

public interface GoodsInfoService {

    public String addGoods(GoodsInfo goodsInfo);

    public Integer deleteGoodsUserSailed(String openid, String goodsName);

    public Integer updateGoodsInfoById(GoodsInfo goodsInfo);

    public PageInfo<GoodsInfo> goodsInfoPagination(String openid, int page, int pageSize);

    public List<GoodsInfo> queryGoodsByCategory(String category);

    public List<GoodsInfo> queryGoodsByLike(String goodsName, String category);

}
