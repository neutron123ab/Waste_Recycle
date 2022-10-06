package com.neutron.waste_recycle_backend.service;

import com.neutron.waste_recycle_backend.entity.GoodsInfo;
import com.neutron.waste_recycle_backend.entity.Order;
import com.neutron.waste_recycle_backend.entity.PageInfo;

import java.util.List;

public interface TradeService {

    public String addOrder(Order order);

    public Integer updateGoodsNum(String id, Integer purchaseNum);

    public Integer getNewGoodsNum(String id);

    public PageInfo<Order> queryGoodsUserPurchased(String openid, Integer page, Integer pageSize);

    public List<GoodsInfo> getGoodsRankBySailedNum();
}
