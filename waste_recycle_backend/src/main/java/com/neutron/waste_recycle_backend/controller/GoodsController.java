package com.neutron.waste_recycle_backend.controller;

import com.neutron.waste_recycle_backend.entity.GoodsInfo;
import com.neutron.waste_recycle_backend.entity.PageInfo;
import com.neutron.waste_recycle_backend.service.GoodsInfoService;
import com.neutron.waste_recycle_backend.service.QueryUserSailedService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/goods")
@Slf4j
public class GoodsController {

    @Autowired
    private GoodsInfoService goodsInfoService;

    @Autowired
    private QueryUserSailedService queryUserSailedService;

    /**
     * 用户售卖商品接口
     * @param goodsInfo
     * @return
     */
    @PostMapping
    public String addGoods(@RequestBody GoodsInfo goodsInfo){
        return goodsInfoService.addGoods(goodsInfo);
    }

    /**
     * 获取已售卖商品数据
     * @param openid
     * @return
     */
    @GetMapping
    public List<GoodsInfo> getGoodsByOpenidDesc(String openid){
        return queryUserSailedService.getGoodsUserSailedAscByTime(openid);
    }

    /**
     * 删除指定商品
     * @param goodsInfo
     * @return
     */
    @DeleteMapping
    public Integer deleteGoodsByOpenid(@RequestBody GoodsInfo goodsInfo){
        return goodsInfoService.deleteGoodsUserSailed(goodsInfo.getOpenid(), goodsInfo.getGoodsName());
    }

    /**
     * 修改指定商品
     * @param goodsInfo
     * @return
     */
    @PutMapping
    public Integer updateGoodeById(@RequestBody GoodsInfo goodsInfo){
        return goodsInfoService.updateGoodsInfoById(goodsInfo);
    }

    /**
     * 商品分页查找
     * @param openid
     * @param page
     * @param pageSize
     * @return
     */
    @GetMapping("/page")
    public PageInfo<GoodsInfo> getGoodsInfoPage(String openid, int page, int pageSize){
        return goodsInfoService.goodsInfoPagination(openid, page, pageSize);
    }

    /**
     * 根据类型查找
     * @param category
     * @return
     */
    @GetMapping("/category")
    public List<GoodsInfo> queryGoodsByCategory(String category){
        return goodsInfoService.queryGoodsByCategory(category);
    }

    /**
     * 根据商品名和类型模糊查询
     * @param goodsName
     * @param category
     * @return
     */
    @GetMapping("/like")
    public List<GoodsInfo> queryGoodsByLike(String goodsName, String category){
        return goodsInfoService.queryGoodsByLike(goodsName, category);
    }

    //部署测试使用
    @GetMapping("/test")
    public String test(){
        return "hello";
    }
}
