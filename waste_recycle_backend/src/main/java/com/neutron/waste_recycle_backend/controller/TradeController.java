package com.neutron.waste_recycle_backend.controller;

import com.neutron.waste_recycle_backend.entity.GoodsInfo;
import com.neutron.waste_recycle_backend.entity.Order;
import com.neutron.waste_recycle_backend.entity.PageInfo;
import com.neutron.waste_recycle_backend.service.TradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
public class TradeController {

    @Autowired
    private TradeService tradeService;

    /**
     * 用户提交订单
     * @param order
     * @return
     */
    @PostMapping
    public String addOrder(@RequestBody Order order){
        return tradeService.addOrder(order);
    }

    /**
     * 更新商品余量
     * @param id
     * @param purchaseNum
     * @return
     */
    @PutMapping
    public Integer updateGoodsNum(@RequestParam String id, @RequestParam Integer purchaseNum){
        return tradeService.updateGoodsNum(id, purchaseNum);
    }

    /**
     * 根据id获取商品余量
     * @param id
     * @return
     */
    @GetMapping("/num")
    public Integer getNewGoodsNum(String id){
        return tradeService.getNewGoodsNum(id);
    }

    /**
     * 根据用户openid查找已购买商品
     * @param openid
     * @param page
     * @param pageSize
     * @return
     */
    @GetMapping
    public PageInfo<Order> queryGoodsByOpenid(String openid, Integer page, Integer pageSize){
        return tradeService.queryGoodsUserPurchased(openid, page, pageSize);
    }

    /**
     * 查询销量排行榜
     * @return
     */
    @GetMapping("/rank")
    public List<GoodsInfo> getRankBySailedNum(){
        return tradeService.getGoodsRankBySailedNum();
    }
}
