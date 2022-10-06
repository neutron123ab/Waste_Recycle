package com.neutron.waste_recycle_backend.controller;

import com.mongodb.client.gridfs.GridFSBucket;
import com.mongodb.client.gridfs.GridFSDownloadStream;
import com.mongodb.client.gridfs.model.GridFSFile;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsResource;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.util.UUID;

@RestController
@RequestMapping("/grid")
public class GRIDFSController {

    @Autowired
    private GridFsTemplate gridFsTemplate;

    @Autowired
    private GridFSBucket gridFSBucket;

    /**
     * 用户上传图片，保存到gridfs
     * @param file
     * @return
     * @throws IOException
     */
    @PostMapping
    public String testGrid(MultipartFile file) throws IOException {
        //要存储的文件
        String originalFilename = file.getOriginalFilename();
        assert originalFilename != null;
        String suffix = originalFilename.substring(originalFilename.lastIndexOf("."));
        String fileName = UUID.randomUUID() + suffix;

        //向GridFS存储文件
        ObjectId objectId = gridFsTemplate.store(file.getInputStream(), fileName, "");

        return objectId.toString();
    }

    /**
     * 根据图片id从gridfs查询图片，并回显到用户端
     * @param response
     * @param pictureId
     */
    @GetMapping
    public void getPic(String pictureId, HttpServletResponse response) {
        //根据文件id查询文件
        GridFSFile gridFSFile = gridFsTemplate.findOne(Query.query(Criteria.where("_id").is(pictureId)));

        //打开一个下载流对象
        assert gridFSFile != null;
        GridFSDownloadStream gridFSDownloadStream = gridFSBucket.openDownloadStream(gridFSFile.getObjectId());
        //创建GridFsResource对象，获取流
        GridFsResource gridFsResource = new GridFsResource(gridFSFile, gridFSDownloadStream);
        try {
            ServletOutputStream outputStream = response.getOutputStream();
            InputStream inputStream = gridFsResource.getInputStream();
            response.setContentType("image/png");
            byte[] bytes = new byte[1024];
            int len = 0;
            while ((len = inputStream.read(bytes)) != -1) {
                outputStream.write(bytes, 0, len);
                outputStream.flush();
            }
            outputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    /**
     * 删除数据库中的图片
     * @param pictureId
     * @return
     */
    @DeleteMapping
    public Integer deleteImgById(String pictureId){

        Query query = new Query();
        query.addCriteria(Criteria.where("_id").is(pictureId));
        gridFsTemplate.delete(query);

        return 1;
    }

}
